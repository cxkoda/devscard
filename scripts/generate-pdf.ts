import * as waitOn from 'wait-on';
import * as puppeteer from 'puppeteer';
import * as path from 'node:path';
import { exec } from 'node:child_process';
import { pdfPage } from 'puppeteer-report';

const isLambda = process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.IS_LAMBDA === 'true';

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const goTo = async (page: puppeteer.Page, url: string) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
};

interface RetryOptions {
  promise: () => ReturnType<typeof goTo>;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions) => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) throw error;
    await waitFor(retryTime);
    return retry({ promise, retries: retries - 1, retryTime });
  }
};

const CV_DIR = path.join(__dirname, '..', 'public');

const main = async () => {
  const child = exec('npm run dev');

  // Wait until http://localhost:3000/pdf is available
  await waitOn({
    resources: ['http://localhost:3000/pdf'],
    timeout: 15000, // wait max 15s
    interval: 500, // poll every 0.5s
    tcpTimeout: 1000,
    window: 1000,
  });

  let launchOptions: puppeteer.LaunchOptions;

  if (isLambda) {
    const chromium = require('@sparticuz/chromium');
    launchOptions = {
      executablePath: await chromium.executablePath(),
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    };
  } else {
    launchOptions = {
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    };
  }

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  await retry({
    promise: () => goTo(page, 'http://localhost:3000/pdf'),
    retries: 5,
    retryTime: 1000,
  });

  const fname = 'cv.pdf';
  const cvPath = path.join(CV_DIR, fname);
  await pdfPage(page, {
    path: cvPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });

  console.log(`${fname} has been created successfully: ${cvPath}`);

  await browser.close();
  child.kill();
  process.exit(0);
};

main();
