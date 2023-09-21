import { Flowers, Jaffle, Parfait } from '@/app/icons';
import JaffleScreen from '@/public/jaffle.jpg';
import ParfaitScreen from '@/public/parfait.jpg';
import FlowersScreen from '@/public/flowers.jpg';

export const experience = [
    {
        title: 'Flowers-Software',
        icon: <Flowers />,
        imageSrc: FlowersScreen,
        withTitle: true,
        subtitle: 'August/2022 - Present',
        technologies: [
            'TypeScript',
            'React',
            'Ant Design',
            'React Query',
            'Redux',
            'Storybook',
            'Tailwind CSS',
        ],
        responsibilities: [
            'Created dynamic SPAs with React, developed reusable components, and optimized client-side routing for a smooth user experience',
            'Collaborated with backend teams to ensure efficient data exchange between the client and server sides of the application',
            'Utilized Storybook to streamline component development, showcase documentation, and facilitate effective UI component testing.',
            'Integrated and configured Figma tokens for consistent design implementation.',
        ],
    },

    {
        title: 'Parfait',
        icon: <Parfait />,
        imageSrc: ParfaitScreen,
        withTitle: false,
        subtitle: 'February/2022 - August/2022',
        technologies: [
            'TypeScript',
            'React',
            'Material UI',
            'React Query',
            'GraphQL',
        ],
        responsibilities: [
            'Developed a single-page application from inception to completion, adhering to provided designs and requirements',
            'Implemented reusable components with a pixel-perfect approach',
            'Participated in code review sessions',
            'Ensured cross-browser support and compatibility',
        ],
    },
    {
        title: 'Jaffle',
        icon: <Jaffle />,
        imageSrc: JaffleScreen,
        withTitle: false,
        subtitle: 'September/2021 - Febuary/2022',
        technologies: ['JavaScript', 'React', 'Tailwind', 'Gutenberg'],
        responsibilities: [
            'Translated designed themes into functional WordPress implementations',
            'Developed Gutenberg blocks to extend WordPress functionality',
            'Optimized source code for improved efficiency and maintainability',
            'Ensured cross-browser support and compatibility',
        ],
    },
];
