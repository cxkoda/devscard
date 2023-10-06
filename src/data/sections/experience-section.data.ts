import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  c,
  chakraUi,
  cpp,
  docker,
  eslint,
  ethereum,
  firebase,
  gcp,
  golang,
  mathematica,
  nextJs,
  nx,
  openmpi,
  pnpm,
  python,
  react,
  reactQuery,
  solidity,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior blockchain engineer',
      company: 'PROOF',
      image: import('@/assets/logos/proof-logo.jpeg'),
      dates: [new Date('2022-08'), null],
      description: `
        - Lead smart-contract engineer:
          - Internal consulting on blockchain related decisions for various projects
          - Design and implement a modular contract infrastructure to facilitate the company's and third-party NFT projects supporting a broad variety of sales mechanisms.
        - Open source projects:
          - [Solidify](https://github.com/proofxyz/solidify): A golang + solidity library aimed to make storing arbitrary data on EVM blockchains as easy and efficient as possible.
          - [Moonbirds in-chain](https://github.com/proofxyz/solidify/tree/main/examples/moonbirds): Develop a smart-contract rendering suite to generate the Moonbirds artwork from compressed image layers stored on-chain (using solidify). This involved on-chain alpha-blending, image resizing, decompressing, encoding, etc, and was heavily optimized through gas profiling and low-level assembly.
        - Research:
          - [EIP-6464](https://eips.ethereum.org/EIPS/eip-6464): Extending ERC-721 to allow multiple operator approval on a per-token basis
          - [EIP-7526](https://eips.ethereum.org/EIPS/eip-7526): A mechanism design approach to on-chain NFT royalty enforcement
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ethereum(), solidity(), golang(), python(), docker()],
      },
      links: [
        website({ url: 'https://www.proof.xyz/' }),
        linkedin({ url: 'https://www.linkedin.com/company/proof-holdings-inc/' }),
      ],
    },
    // {
    //   role: 'Blockchain engineer',
    //   company: 'PROOF',
    //   image: import('@/assets/logos/proof-logo.jpeg'),
    //   dates: [new Date('2022-08'), new Date('2023-05')],
    //   description: `
    //     - In tristique vulputate augue vel egestas.
    //     - Quisque ac imperdiet tortor, at lacinia ex.
    //     - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
    //     - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
    //     - Nunc malesuada leo et est iaculis facilisis.
    //     - Fusce eu urna ut magna malesuada fringilla.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [ethereum(), solidity(), golang(), python(), docker(), gcp()],
    //   },
    //   links: [
    //     website({ url: 'https://www.proof.xyz/' }),
    //     linkedin({ url: 'https://www.linkedin.com/company/proof-holdings-inc/' }),
    //   ],
    // },
    {
      role: 'Blockchain and Research Engineer',
      company: 'Freelance',
      image: import('@/assets/logos/cxkoda.png'),
      dates: [new Date('2022-01'), null],
      description: `
        - Collaborate with clients to define project requirements and design secure and efficient smart-contract solutions and related backends.
        - Write clean, well-documented Solidity and golang code for applications on Ethereum.
        - Conduct thorough code reviews and security audits to identify and rectify vulnerabilities, ensuring the safety of smart contracts.
        - Optimize gas efficiency and reduce transaction costs through code optimizations and gas fee analysis.
        - Perform numerical simulations and analyses to inform technical design decisions.
        - Collaborate with UI/UX designers, and product managers to deliver end-to-end blockchain solutions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ethereum(), solidity(), golang(), mathematica(), python(), docker()],
      },
      links: [website({ url: 'https://david-huber.eu' }), twitter({ url: 'https://twitter.com/cxkoda' })],
    },
    {
      role: 'University Assistant',
      company: 'University of Innsbruck',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2017-09'), new Date('2021-12')],
      description: `
      - Research within the scope of my PhD project: "Relativistic Fluid Modelling of Gamma-Ray Binary Emission"
      - Development of numerical models for relativistic hydrodynamics integrated within CRONOS aimed for high-performance computing infrastructure (C++)
      - Development of visualisation tools (Python, Mathematica)
      - Development and management of courses in various areas of physics and programming (C, Python, Mathematica)
      - Supervision of Bachelor theses
      `,
      tagsList: {
        title: 'Technologies',
        tags: [cpp(), c(), python(), mathematica(), openmpi(), golang()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Software Engineer',
      company: 'University of Innsbruck, Department of Microbiology',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2016-01'), new Date('2016-10')],
      description: `
      - Research and development of automated microscope image analysis for sewage purification
      plants
      - 4th Place CAST Technology Award
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), mathematica()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
