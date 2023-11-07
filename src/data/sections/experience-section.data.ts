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
  postgreSql,
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
      role: 'Lead Blockchain Engineer',
      company: 'PROOF',
      image: import('@/assets/logos/proof-logo.jpeg'),
      dates: [new Date('2022-08'), new Date('2023-10')],
      description: `
        - Consulted internally on blockchain related decisions for 15+ projects ensuring their smooth execution
        - Developed a modular smart-contract infrastructure with >25k lines of Solidity, handling >2.5k ETH (>$4M) in primary transaction value and generating >13k ETH (>$20M) in secondary revenue
        - Implemented [Moonbirds in-chain](https://github.com/proofxyz/solidify/tree/main/examples/moonbirds); A low-level optimized, on-chain rendering suite for Moonbirds using compressed image layers deployed with [Solidify](https://github.com/proofxyz/solidify); achieving <0.5 ETH in deployment costs
        - Released [Solidify](https://github.com/proofxyz/solidify); A golang + solidity library for efficient data storage on EVM blockchains
        - Contributed to the broader Ethereum ecosystem by co-authoring [EIP-6464](https://eips.ethereum.org/EIPS/eip-6464) and [EIP-7526](https://github.com/ethereum/EIPs/pull/7781)
      `,
      // [modular smart-contract infrastructure](https://github.com/proofxyz/solgo)
      tagsList: {
        title: 'Technologies',
        tags: [ethereum(), solidity(), golang(), python(), docker(), postgreSql()],
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
      // clients:
      // gm studio
      // alba
      // twofiftysix
      // divergence
      // kai
      // constant
      //
      // ethier
      // - Numerical simulations and analyses to inform technical design decisions
      // - Collaboration with UI/UX designers, and product managers to deliver end-to-end blockchain solutions
      description: `
        - Collaborated with 6+ clients and their teams to define project requirements ensuring a smooth execution
        - Delivered custom smart-contract solutions and related backends
        - Collaborated with 2+ security auditing firms to identify and rectify vulnerabilities
        - Contributed over 8.5k lines of code (~30%) to the open-source library [Ethier](https://github.com/divergencetech/ethier)
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
      - Contributed to 30+ research items including 3 articles as first author, published in high-impact journals 
      - Developed numerical methods for HPC infrastructure with parallel execution on >12k cores
      - Received a [PRACE](https://prace-ri.eu/) project grant for >27M CPUh on the [Joliot Curie](https://www-hpc.cea.fr/en/Joliot-Curie.html) Rome infrastructure 
      `,
      // - Received a [PRACE](https://prace-ri.eu/) project grant for >27M CPUh on the [Joliot Curie](https://www-hpc.cea.fr/en/Joliot-Curie.html) Rome infrastructure to investigate dynamical phenomena in the LS5039 system
      // - Developed, implemented and thought 4 undergraduate courses in various areas of physics and programming
      // - Supervised and mentored 3 Bachelor projects with successful graduation
      tagsList: {
        title: 'Technologies',
        tags: [cpp(), c(), python(), mathematica(), openmpi(), golang()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    // {
    //   role: 'Software and Research Engineer',
    //   company: 'University of Innsbruck, Department of Microbiology',
    //   image: import('@/assets/logos/uibk-logo.png'),
    //   dates: [new Date('2016-01'), new Date('2016-10')],
    //   description: `
    //   - Research and development of an automated microscope image analysis framework (Obsidian) for sewage purification plants to infer operation critical parameters
    //   - Received the CAST Technology Award
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [python(), mathematica()],
    //   },
    //   links: [],
    // },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
