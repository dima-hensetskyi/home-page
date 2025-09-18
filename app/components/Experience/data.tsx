import { Flowers, Jaffle, Parfait, Md, SH } from '@/app/icons';
import JaffleScreen from '@/public/jaffle.jpg';
import ParfaitScreen from '@/public/parfait.jpg';
import FlowersScreen from '@/public/flowers.jpg';
import MH from '@/public/MH.jpg';
import ShScreen from '@/public/Sh.jpg';

export const experience = [
    {
        title: 'Logistics & Asset Management Platform',
        icon: <SH />,
        imageSrc: ShScreen,
        withTitle: false,
        subtitle: 'September/2024 - Present',
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
            'Led the decomposition of a large-scale application into independent modules using a micro-frontend approach, improving maintainability and scalability',
            'Optimized page load speed and overall performance through code splitting, lazy loading, and efficient state management',
            'Automated the generation of styles and classes directly from Figma tokens, ensuring consistency between design and development',
            'Enhanced state loading and updating strategies in the SPA to provide a smoother user experience',
            ' Migrated and refactored parts of the functionality using Next.js to leverage server-side rendering and improve performance',
        ],
    },
    {
        title: 'Decentralized Medical Care Platform',
        icon: <Md />,
        imageSrc: MH,
        withTitle: false,
        subtitle: 'December/2023 - September/2024',
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
            'Participated in the redesign of an outdated application, contributing to the transformation into a modern, user-friendly interface',
            'Developed a comprehensive library of reusable components using Tailwind CSS and Figma tokens to ensure design consistency and scalability',
            'Rebuilt the old application using cutting-edge technologies, including React, React Query, and Tailwind CSS, to enhance performance and maintainability',
            'Collaborated with the design team to integrate Figma tokens, ensuring a seamless transition from design to development',
            "Optimized the application's performance by implementing efficient data fetching and caching strategies with React Query",
        ],
    },
    {
        title: 'Flowers-Software',
        icon: <Flowers />,
        imageSrc: FlowersScreen,
        withTitle: true,
        subtitle: 'August/2022 - November/2023',
        technologies: [
            'TypeScript',
            'JavaScript',
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
            'JavaScript',
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
