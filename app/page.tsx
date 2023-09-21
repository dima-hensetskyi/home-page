'use client';

import React from 'react';
import {
    Education,
    Experience,
    PromoHero,
    Skills,
    PetProjects,
    Contact,
} from './components';
import { LazyMotion } from 'framer-motion';

const loadFeaturesPackage = () =>
    import('./components/motionFeatures').then((res) => res.default);

const MainPage = () => {
    return (
        <LazyMotion features={loadFeaturesPackage}>
            <PromoHero />
            <Skills />
            <Education />
            <Experience />
            <PetProjects />
            <Contact />
        </LazyMotion>
    );
};

export default MainPage;
