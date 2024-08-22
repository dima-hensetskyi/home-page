import React from 'react';
import { DSlider } from '../Slider';
import Image from 'next/image';

import { certifications } from './data';

export const Certifications = () => {
    return (
        <section className="dh-certifications dh-section" id="certifications">
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Licenses & certifications</h3>
            <DSlider autoplaySpeed={3000} autoplay>
                {certifications.map((item) => (
                    <a
                        target="_blank"
                        key={item.src}
                        rel="noopener noreferrer"
                        href={item.src}
                    >
                        <Image src={item.imageSrc} alt={''}></Image>
                    </a>
                ))}
            </DSlider>
        </section>
    );
};
