'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plant } from '@/app/icons';

export const AnimatedPlant = () => {
    return (
        <>
            <motion.div
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                initial={{ translateY: '0%' }}
                whileInView={{ translateY: ['0%', '-8%', '0%'] }}
                className="dh-pet-projects__icon"
            >
                <Plant />
            </motion.div>
        </>
    );
};
