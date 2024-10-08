import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { TiPointOfInterest } from 'react-icons/ti';

type ExperienceCardPropsType = {
    imageSrc: any;
    title: string;
    subtitle: string;
    technologies: string[];
    responsibilities: string[];
};

export const ExperienceCard: React.FC<ExperienceCardPropsType> = ({
    imageSrc,
    title,
    technologies,
    subtitle,
    responsibilities,
}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const translateY = useTransform(
        scrollYProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        ['8%', '-8%'],
    );

    return (
        <div className="dh-expr-card-wrapper" ref={ref}>
            <motion.div
                className="dh-expr-card"
                style={{
                    translateY,
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0.7, scale: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.8,
                }}
            >
                <Image
                    className="dh-expr-card-image"
                    src={imageSrc}
                    alt={`${title} example`}
                />
                <div className="dh-expr-card__body">
                    <div className="flex flex-col">
                        <h4 className="dh-experience-item__title">{title}</h4>
                        <h6 className="dh-experience-item__subtitle">
                            {subtitle}
                        </h6>
                    </div>
                    <ul className="dh-experience-responsibilities-list">
                        {responsibilities.map((responsibility) => (
                            <li key={responsibility}>
                                <TiPointOfInterest />
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                    <div className="dh-technology-list">
                        {technologies.map((technology) => (
                            <div
                                key={technology}
                                className="dh-technology-list__item"
                            >
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
