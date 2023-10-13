import React from 'react';

import { experience } from './data';
import { ExperienceCard } from './ExperienceCard';

import './index.scss';

const Experience = () => {
    return (
        <section className="dh-experience dh-section" id="case-studies">
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Case Studies</h3>
            <div className="dh-experience-list">
                {experience.map((item) => (
                    <div
                        className="dh-experience-item dh-block"
                        key={item.title}
                    >
                        <div className="dh-experience-item__details">
                            {item.withTitle && (
                                <h4 className="dh-experience-item__title">
                                    {item.title}
                                </h4>
                            )}
                            {item.icon}
                        </div>
                        <ExperienceCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
