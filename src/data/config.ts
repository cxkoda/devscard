import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'David Huber - Senior Software Engineer',
    description: 'Computational physicist gone rogue.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer: 'For a more detailed CV see also https://cv.david-huber.eu/',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
