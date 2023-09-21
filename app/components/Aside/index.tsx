'use client';

import React from 'react';
import { LazyMotion, m } from 'framer-motion';

const loadFeaturesPackage = () =>
    import('../motionFeatures').then((res) => res.default);

import './index.scss';

export const Aside = () => {
    return (
        <aside className="dh-body__aside dh-body-aside">
            <LazyMotion features={loadFeaturesPackage}>
                <m.div
                    className="dh-body-aside-line"
                    initial={{ height: '0' }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 10, amount: 0.5 }}
                />
            </LazyMotion>
        </aside>
    );
};
