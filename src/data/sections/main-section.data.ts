import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter, email } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.png'),
  fullName: 'David Huber, PhD',
  role: 'Senior Software Engineer',
  details: [{ label: 'Email', value: 'me@david-huber.eu', url: 'mailto:me@david-huber.eu' }],
  pdfDetails: [
    { label: 'Email', value: 'me@david-huber.eu' },
    { label: 'LinkedIn', value: 'dave-huber', url: 'https://linkedin.com/in/dave-huber' },
    { label: 'GitHub', value: 'cxkoda', url: 'https://github.com/cxkoda' },
    { label: 'Website', value: 'david-huber.eu', url: 'https://david-huber.eu', fullRow: true },
  ],
  description: `
  I'm a computational physicist turned software engineer with strong theoretical and practical skills and a passion for complex problems.\n\n
  
  I have received a PhD in high-energy astroparticle physics working on relativistic fluid models for HPC infrastructure. Currently I'm working in web3 developing custom smart-contract and backend solutions with a passion for on-chain generative art and home espresso making.
  `,
  tags: [{ name: 'Open for freelance' }, { name: 'Open for hire' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-David_Huber.pdf',
  },
  links: [
    email({ url: 'mailto:me@david-huber.eu' }),
    github({ url: 'https://github.com/cxkoda' }),
    linkedin({ url: 'https://www.linkedin.com/in/dave-huber' }),
    twitter({ url: 'https://twitter.com/cxkoda' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
