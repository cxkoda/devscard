import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  circom,
  cpp,
  cypress,
  eslint,
  firebase,
  golang,
  mathematica,
  mongoDb,
  nestJs,
  noir,
  pnpm,
  postgreSql,
  prettier,
  python,
  react,
  rust,
  sass,
  solidity,
  supabase,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        solidity({
          level: 5,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        golang({ level: 4 }),
        mathematica({ level: 4 }),
        cpp({ level: 3 }),
        python({ level: 3 }),
        postgreSql({ level: 2 }),
        typescript({
          level: 2,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [rust(), noir(), circom()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:de', name: 'German - Native' },
        { icon: 'circle-flags:gb', name: 'English - Full professional proficiency' },
        { icon: 'circle-flags:it', name: 'Italian - Limited working proficiency' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
