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
  image: import('@/assets/my-image.jpeg'),
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
  Transitioning from a computational physicist to a software engineer, I've honed a unique blend of theoretical abilities and hands-on expertise. My academic journey culminated with a PhD in astroparticle physics, where I delved into relativistic fluid models tailored for high-performance computing.\n\n
  Professionally, I am now fully immersed in web3, developing custom smart-contract and backend solutions for a broad range of applications while maintaining a strong focus on security and maintainability and with a passion for complex problems and home espresso making.
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
