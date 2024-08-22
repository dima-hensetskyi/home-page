'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { skills } from './data';

import './index.scss';

const Skills = () => {
    return (
        <section className="dh-skills dh-section" id="skills">
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Skills</h3>
            <motion.div
                animate={{ '--base-hue': 360 } as any}
                initial={{ '--base-hue': 0 } as any}
                transition={{
                    duration: 10,
                    loop: Infinity,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className="dh-skills-grid"
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        className="dh-skills-grid__item"
                        key={skill.title}
                        style={{
                            color: `hsla(calc(var(--base-hue) + ${
                                (360 / 6) * idx
                            }), 80%, 60%, 1)`,
                        }}
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.3 }}
                    >
                        {skill.icon}
                        <h6 className="dh-skills-grid__item-title">
                            {skill.title}
                        </h6>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
