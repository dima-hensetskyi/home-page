import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                courgette: ['var(--font-courgette)'],
                cookie: ['var(--font-cookie)'],
                ['dm-sans']: ['var(--font-dm-sans)'],
                outfit: ['var(--font-outfit)'],
            },
        },
        colors: {
            label: {
                dark: '#253368',
                gray: '#6A6A6A',
                ['gray-100']: '#F2F2F2',
            },
            gray: {
                lightest: '#E2E6EE',
                lightest2: '#F7F9FC',
            },
            ['blue-light']: '#f3f6fb',
            volcano: '#FF7946',
            blue: '#597EF7',
            gradient: {
                primary: '#A478E8',
            },
            secondary: {
                1: '#ADC6FF',
                2: '#E4EBF7',
                3: '#CCD7EE',
                4: '#A3B5D6',
                5: '#4E5C93',
            },
        },
    },
    plugins: [],
};
export default config;
