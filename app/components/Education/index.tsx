import React from 'react';

import { Card } from '../Card';
import { educations } from './data';

import './index.scss';

const Education = () => {
    return (
        <section id="education" className="dh-education dh-section">
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Education</h3>
            <div className="dh-education__list">
                {educations.map((education) => (
                    <Card {...education} key={education.name} />
                ))}
            </div>
        </section>
    );
};

export default Education;
