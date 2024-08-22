import React from 'react';
import {
    Education,
    Experience,
    PromoHero,
    Skills,
    PetProjects,
    Contact,
} from './components';

const MainPage = () => {
    return (
        <>
            <PromoHero />
            <Skills />
            <Education />
            <Experience />
            <PetProjects />
            {/* <Certifications /> */}
            <Contact />
        </>
    );
};

export default MainPage;
