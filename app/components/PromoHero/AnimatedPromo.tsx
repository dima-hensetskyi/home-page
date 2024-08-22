'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedPromo = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <div className="dh-promo-hero__cta">
            <motion.div
                style={{
                    scale,
                }}
                className="dh-promo-hero__illustration"
            />
        </div>
    );
};
