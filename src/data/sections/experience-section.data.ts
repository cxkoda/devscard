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
  nextJs,
  nx,
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
      dates: [new Date('2023-05'), null],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
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
    {
      role: 'Blockchain engineer',
      company: 'PROOF',
      image: import('@/assets/logos/proof-logo.jpeg'),
      dates: [new Date('2022-08'), new Date('2023-05')],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ethereum(), solidity(), golang(), python(), docker(), gcp()],
      },
      links: [
        website({ url: 'https://www.proof.xyz/' }),
        linkedin({ url: 'https://www.linkedin.com/company/proof-holdings-inc/' }),
      ],
    },
    {
      role: 'Blockchain Engineer',
      company: 'Freelance',
      image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2022-01'), null],
      description: `
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ethereum(), solidity(), golang(), python(), docker()],
      },
      links: [website({ url: 'https://david-huber.eu' }), twitter({ url: 'https://twitter.com/cxkoda' })],
    },
    {
      role: 'University Assistant',
      company: 'University of Innsbruck',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2017-09'), new Date('2021-12')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [cpp(), c(), python(), golang()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
