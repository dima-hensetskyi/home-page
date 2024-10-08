import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { RiPagesFill } from 'react-icons/ri';

import { AnimatedPlant } from './AnimatedPlant';
import { Background } from '@/app/icons';
import { petProjects } from './data';

import './index.scss';

const PetProjects = () => {
    return (
        <section className="dh-pet-projects dh-section" id="pet-projects">
            <div className="dh-pet-projects__bg-icon">
                <Background />
            </div>
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Pet Projects</h3>
            <div className="dh-pet-projects__list">
                {petProjects.map((project) => (
                    <div key={project.title} className="dh-card-panel">
                        <div className="dh-card-panel__details">
                            {project.icon}
                            <div className="flex flex-col gap-1">
                                <h6 className="dh-card-panel__title">
                                    {project.title}
                                </h6>
                                <div className="dh-technology-list">
                                    {project.technologies.map((technology) => (
                                        <div
                                            key={technology}
                                            className="dh-technology-list__item"
                                        >
                                            {technology}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="dh-card-panel__links">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <RiPagesFill />
                                </a>
                            )}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <AnimatedPlant />
        </section>
    );
};

export default PetProjects;
