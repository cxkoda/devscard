import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, repository, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  golang,
  solidity,
  docker,
  prometheus,
  cpp,
  python,
  c,
  openmpi,
  ethereum,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Mantle Liquid Staking Protocol',
      image: import('@/assets/logos/mantle-logo.jpg'),
      dates: [new Date('2023-05'), new Date('2023-10')],
      details: [
        { label: 'Team size', value: '5 person' },
        { label: 'My role', value: ['Architect', 'Smart-Contract Engineer'] },
        { label: 'Company', value: 'TwoFiftySix Labs' },
        { label: 'Category', value: ['Web 3', 'Liquid Staking'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      // ],
      screenshots: [{ src: import('@/assets/portfolio/meth-architecture.jpeg'), alt: 'Architecture' }],
      description: `
      Upcoming Ethereum liquid staking protocol operated by Mantle DAO aimed to handle $1B+ in assets in its final form.
      - Co-designed the high-level smart-contract and off-chain service architecture underpinning the protocol
      - Implemented various parts (~40%) of the smart-contract infrastructure  
      - Collaborated with auditors to identify and rectify vulnerabilities
      `,
      tagsList: {
        title: 'Technologies',
        tags: [solidity(), golang(), docker(), prometheus()],
      },
      links: [
        website({ url: 'https://www.mantle.xyz/' }),
        website({
          url: 'https://etherscan.io/advanced-filter?fadd=0x207e804758e28f2b3fd6e4219671b327100b82f8&mtd=0x60806040%7e0x60806040&age=2023-10-05%7e2023-10-07',
        }),
      ],
    },
    {
      name: 'gm. studio',
      image: import('@/assets/logos/gmstudio-logo.jpeg'),
      dates: [new Date('2021-12'), null],
      details: [
        { label: 'Team size', value: '4 person' },
        { label: 'My role', value: ['Architect', 'Smart-contract Engineer', 'Backend Engineer', 'Curator'] },
        { label: 'Company', value: 'gm DAO' },
        { label: 'Category', value: ['Web 3', 'Generative Art Platform'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      // ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description: `
      The on-chain generative art platform by artists, for artists.
      - Developed the contract infrastructure underpinning the platform with 11+ collections launched, and over $2M generated in revenue.
      - Contributed to the backend services handling the dynamic rendering of generative artworks 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [solidity(), golang(), postgreSql(), docker(), react(), tailwindCss()],
      },
      links: [website({ url: 'https://www.gmstudio.art/' })],
    },
    // {
    //   name: 'Ethier',
    //   // image: import('@/assets/logos/strange-attractors-logo.png'),
    //   dates: [new Date('2021-08'), null],
    //   details: [
    //     { label: 'Team size', value: '2 person' },
    //     { label: 'My role', value: ['Smart-contract Engineer', 'Contributor'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web 3', 'Smart-contract library'] },
    //   ],
    //   // pdfDetails: [
    //   //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
    //   //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
    //   // ],
    //   // screenshots: [
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa1.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa2.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa4.png'), alt: 'First screenshot' },
    //   // ],
    //   description:
    //     'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [solidity(), golang()],
    //   },
    //   links: [repository({ url: 'https://github.com/divergencetech/ethier' })],
    // },
    {
      name: 'Strange Attractors',
      image: import('@/assets/logos/strange-attractors-logo.png'),
      dates: [new Date('2021-08'), new Date('2021-10')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Full-stack Engineer', 'Manager'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web 3', 'In-chain Generative Art'] },
      ],
      pdfDetails: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Full-stack Engineer', 'Manager'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web 3', 'In-chain Generative Art'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/strange-attractors/sa1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/strange-attractors/sa2.png'), alt: 'Secondary screenshot' },
        { src: import('@/assets/portfolio/strange-attractors/sa4.png'), alt: 'Third screenshot' },
      ],
      description: `
      An interactive, generative art project that simulates multi-dimensional, chaotic systems using nothing but Ethereum smart contracts. The project features on-chain numerical solution of multidimensional differential equations, image generation and participatory elements without any off-chain dependencies. 
      - Conceptualized and implemented the project, its contracts and UI as sole developer, generating 160ETH in revenue
      `,
      tagsList: {
        title: 'Technologies',
        tags: [solidity(), nextJs(), typescript(), sass()],
      },
      links: [website({ url: 'https://strangeattractors.art/' }), demo({ url: 'https://strangeattractors.art/demo' })],
    },
    // {
    //   name: 'PRACE Project RA5453',
    //   image: import('@/assets/portfolio/prace.png'),
    //   dates: [new Date('2020-10'), new Date('2021-10')],
    //   details: [
    //     { label: 'Team size', value: '3 person' },
    //     { label: 'My role', value: ['Principal Researcher'] },
    //     { label: 'Company', value: 'Univeristy Innsbruck' },
    //     { label: 'Category', value: ['Astrophysics', 'Hydrodynamics', 'HPC'] },
    //   ],
    //   // pdfDetails: [
    //   //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
    //   //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
    //   // ],
    //   // screenshots: [
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa1.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa2.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa4.png'), alt: 'First screenshot' },
    //   // ],
    //   description: `
    //   High-resolution simulation of the dynamic fluid interaction, turbulence, particle acceleration and gamma-ray emission in the LS5039 system over multiple using a relativistic hydrodynamic model.
    //   - Project grant for 27.2M CPUh on the [Joliot Curie](https://www-hpc.cea.fr/en/Joliot-Curie.html) Rome HPC infrastructure
    //   - Parallel code execution of the CRONOS code on >12k cores
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [cpp(), openmpi()],
    //   },
    //   links: [website({ url: 'https://www.aanda.org/articles/aa/full_html/2023/09/aa45934-23/aa45934-23.html' })],
    // },
    // {
    //   name: 'Cronos',
    //   // image: import('@/assets/logos/strange-attractors-logo.png'),
    //   dates: [new Date('2021-08'), new Date('2021-10')],
    //   details: [
    //     { label: 'Team size', value: '2 person' },
    //     { label: 'My role', value: ['Full-stack Engineer', 'Manager'] },
    //     { label: 'Company', value: 'Univeristy Innsbruck' },
    //     { label: 'Category', value: ['Astrophysics', 'Hydrodynamics', 'HPC'] },
    //   ],
    //   // pdfDetails: [
    //   //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
    //   //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
    //   // ],
    //   // screenshots: [
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa1.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa2.png'), alt: 'First screenshot' },
    //   //   { src: import('@/assets/portfolio/strange-attractors/sa4.png'), alt: 'First screenshot' },
    //   // ],
    //   description:
    //     'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [cpp(), python(), openmpi()],
    //   },
    //   links: [],
    // },
    // {
    //   name: 'TruQuest',
    //   image: import('@/assets/portfolio/project-2.jpeg'),
    //   dates: [new Date('2019-06'), new Date('2020-02')],
    //   details: [
    //     { label: 'Team size', value: '7 people' },
    //     { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
    //     { label: 'Company', value: 'Facebook' },
    //     { label: 'Category', value: ['Web app', 'Mobile app'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
    //   ],
    //   description:
    //     'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), tailwindCss(), nestJs(), postgreSql()],
    //   },
    //   links: [mockups({ url: '#' }), demo({ url: '#' })],
    // },
    // {
    //   name: 'Software Chasers',
    //   image: import('@/assets/portfolio/project-3.jpeg'),
    //   dates: [new Date('2018-01'), new Date('2020-12')],
    //   details: [
    //     { label: 'Team size', value: '3 people' },
    //     { label: 'My role', value: ['Front-end Developer', 'Designer'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
    //   ],
    //   description:
    //     'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
    //   },
    //   links: [website({ url: '#' }), github({ url: '#' })],
    // },
    // {
    //   name: 'Disco Ninjas',
    //   image: import('@/assets/portfolio/project-4.jpeg'),
    //   dates: [new Date('2016-05'), new Date('2018-07')],
    //   details: [
    //     { label: 'Team size', value: '11 people' },
    //     { label: 'My role', value: 'Front-end Developer' },
    //     { label: 'Company', value: 'Google' },
    //     { label: 'Category', value: ['Mobile app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
    //   ],
    //   description:
    //     'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [typescript(), jest(), firebase()],
    //   },
    //   links: [mockups({ url: '#' }), github({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
