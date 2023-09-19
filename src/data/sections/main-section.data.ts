import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter } from '../helpers/links';

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
  details: [
    // { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'me@david-huber.eu', url: 'mailto:me@david-huber.eu' },
    { label: 'Based in', value: 'Innsbruck, Austria' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    // { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'me@david-huber.eu' },
    { label: 'LinkedIn', value: '/in/dave-huber', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/cxkoda', url: 'https://github.com' },
    { label: 'Website', value: 'david-huber.eu', url: '/', fullRow: true },
  ],
  description:
    'Tech savvy computational physicist turned software engineer with strong theoretical and practical skills and a passion for complex problems.\nReceived a PhD in high-energy astroparticle physics working on relativistic fluid models for HPC infrastructure.\nNow working in web3 developing custom smart-contract and backend solutions with a passion for in-chain genart.',
  tags: [{ name: 'Open for freelance' }, { name: 'Open for hire' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-David_Huber.pdf',
  },
  links: [
    github({ url: 'https://github.com/cxkoda' }),
    linkedin({ url: 'https://www.linkedin.com/in/dave-huber' }),
    twitter({ url: 'https://twitter.com/cxkoda' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
