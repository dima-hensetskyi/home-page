import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import { ContactsPanel } from '../ContactsPanel';
import { DownloadResumeBtn } from '../DownloadResumeBtn';

import './index.scss';

export const PromoHero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section className="dh-promo-hero">
            <div className="dh-promo-hero__content dh-promo-hero-content">
                <h4 className="dh-promo-hero-content__subtitle">
                    Hi, my name is Dima
                </h4>
                <h3 className="dh-promo-hero-content__title">
                    I’m a Frontend Developer
                    <br /> with more than 2 years
                    <br /> experience
                </h3>
                <DownloadResumeBtn />
                <ContactsPanel />
            </div>
            <div className="dh-promo-hero__cta">
                <m.div
                    style={{
                        scale,
                    }}
                    className="dh-promo-hero__illustration"
                />
            </div>
        </section>
    );
};
