import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'PhD in Computational High-Energy Astroparticle Physics',
      institution: 'Leopold-Franzens-Universität Innsbruck, Austria',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2017.10'), new Date('2022.01')],
      description: ``,
      // `
      // - Numerical models in C++ for HPC-applications
      // - Turbulent fluid simulations in 3D
      // - Dynamically coupled particle transport models
      // - Non-thermal emission processes
      // - Focus: Gamma-ray binaries
      // `,
      links: [website({ url: 'https://www.uibk.ac.at/en/' })],
      details: [
        {
          label: 'Degree',
          value: 'Doctor of Philosophy (PhD)',
        },
        {
          label: 'Research Topic',
          value: 'Relativistic Fluid Modelling of Gamma-Ray Binary Emission',
        },
      ],
    },
    {
      title: 'MSc in Computational Physics',
      institution: 'Leopold-Franzens-Universität Innsbruck, Austria',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2015.10'), new Date('2017.10')],
      description: ``,
      // description: `
      // - Implementation of relativistic hydrodynamics in CRONOS
      // - Visualisation tools
      // - Application to study the wind interaction in gamma-ray binaries.
      // `,
      links: [website({ url: 'https://www.uibk.ac.at/en/' })],
      details: [
        {
          label: 'Degree',
          value: 'Master of Science (MSc)',
        },
        {
          label: 'Thesis Title',
          value: 'Relativistic Hydrodynamics in Gamma-Ray Binaries',
        },
      ],
    },
    {
      title: 'BSc in Physics',
      institution: 'Leopold-Franzens-Universität Innsbruck, Austria',
      image: import('@/assets/logos/uibk-logo.png'),
      dates: [new Date('2012.10'), new Date('2015.08')],
      description: '',
      // description: `
      // - Development of a C++ tool to calculate synchrotron emission
      // - Application to simulated data of Colliding-Wind-Binaries
      // `,
      links: [website({ url: 'https://www.uibk.ac.at/en/' })],
      details: [
        {
          label: 'Degree',
          value: 'Bachelor of Science (BSc)',
        },
        {
          label: 'Thesis Title',
          value: 'The Synchrotron Spectrum of Colliding Wind Binaries',
        },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
