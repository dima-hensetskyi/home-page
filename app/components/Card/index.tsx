import React from 'react';
import { m } from 'framer-motion';

import './index.scss';

type CardPropsType = {
    title: string;
    icon?: React.ReactNode;
    name: string;
    subtitle: string;
    href: string;
};

export const Card: React.FC<CardPropsType> = ({
    title,
    name,
    subtitle,
    icon,
    href,
}) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <m.div transition={{ duration: 0.2 }} className="dh-card">
                <div className="dh-card__details">
                    {icon}
                    <h5 className="dh-card__name">{name}</h5>
                </div>
                <h3 className="dh-card__title">{title}</h3>
                <h6 className="dh-card__subtitle">{subtitle}</h6>
            </m.div>
        </a>
    );
};
