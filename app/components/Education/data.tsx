import { Cs50, Epam, NULP } from '@/app/icons';
import { HiArrowCircleUp } from 'react-icons/hi';

export const educations = [
    {
        title: 'Front-End External Program',
        icon: <Epam />,
        name: 'EPAM University',
        subtitle: 'February/2021 - September/2021',
        href: 'https://training.epam.ua/en',
    },
    {
        title: 'Advanced Front-End Courses',
        icon: <HiArrowCircleUp style={{ color: '#FF6700' }} />,
        name: 'Cursor Education',
        subtitle: 'November/2020 - February/2021',
        href: 'https://www.cursor.education/',
    },
    {
        title: 'Computer Science and the Art of Programming',
        icon: <Cs50 />,
        name: 'CS50',
        subtitle: 'September/2020',
        href: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
    },
    {
        title: 'Master of Economic Sciences',
        icon: <NULP />,
        name: 'Lviv National University',
        subtitle: '2015 - 2021',
        href: 'https://lpnu.ua/en',
    },
];
