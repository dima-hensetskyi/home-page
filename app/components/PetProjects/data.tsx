import { PiStudentFill } from 'react-icons/pi';
import { CiMemoPad } from 'react-icons/ci';
import { GrRss } from 'react-icons/gr';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';

export const petProjects = [
    {
        title: 'Memory (Card Game)',
        icon: <CiMemoPad />,
        technologies: ['JavaScript'],
        github: 'https://github.com/dima-hensetskyi/memory-card-game',
        demo: 'https://dima-hensetskyi.github.io/memory-card-game',
    },
    {
        title: 'RSS Feed Reader',
        icon: <GrRss />,
        technologies: ['React.js', 'Redux'],
        github: 'https://github.com/dima-hensetskyi/RSS-Feed-Reader/tree/master',
        demo: 'https://dima-hensetskyi.github.io/RSS-Feed-Reader/',
    },
    {
        title: 'URL Shortener',
        icon: <MdOutlineDatasetLinked />,
        technologies: [
            'React.js',
            'Redux',
            'Express.js',
            'Mongoose',
            'Node.js',
        ],
        github: 'https://github.com/dima-hensetskyi/url-shortener',
    },
    {
        title: 'Rick and Morty',
        icon: <PiStudentFill />,
        technologies: ['React.js', 'Redux'],
        github: 'https://github.com/dima-hensetskyi/rick-and-morty/tree/master',
        demo: 'https://dima-hensetskyi.github.io/rick-and-morty',
    },
    {
        title: 'Landing page',
        icon: <TbAirConditioning />,
        technologies: ['React.js'],
        github: 'https://github.com/dima-hensetskyi/air-conditioners-landing-page/tree/master',
        demo: 'https://dima-hensetskyi.github.io/air-conditioners-landing-page',
    },
];
