import React from 'react';

import { AnimatedPromo } from './AnimatedPromo';
import { ContactsPanel } from '../ContactsPanel';
import { DownloadResumeBtn } from '../DownloadResumeBtn';

import './index.scss';

export const PromoHero = () => {
    return (
        <section className="dh-promo-hero">
            <div className="dh-promo-hero__content dh-promo-hero-content">
                <h4 className="dh-promo-hero-content__subtitle">
                    Hi, I’m Dima
                </h4>
                <h3 className="dh-promo-hero-content__title">
                    Frontend Developer
                    <br /> 4+ Years of Experience
                </h3>
                <DownloadResumeBtn />
                <ContactsPanel />
            </div>
            <AnimatedPromo />
        </section>
    );
};
