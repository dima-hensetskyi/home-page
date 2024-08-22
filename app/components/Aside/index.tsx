'use client';

import React from 'react';
import { motion } from 'framer-motion';

import './index.scss';

export const Aside = () => {
    return (
        <aside className="dh-body__aside dh-body-aside">
            <motion.div
                className="dh-body-aside-line"
                initial={{ height: '0' }}
                animate={{ height: '100%' }}
                transition={{ duration: 10, amount: 0.5 }}
            />
        </aside>
    );
};
