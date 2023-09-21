'use client';
import React, { useState } from 'react';
import cx from 'classnames';
import { MdMenu } from 'react-icons/md';

import './index.scss';

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header
            className={cx('dh-header', { 'dh-header--menu-open': isNavOpen })}
        >
            <div
                className="dh-header-menu-btn"
                onClick={() => setIsNavOpen((prev) => !prev)}
            >
                <MdMenu />
            </div>
            <nav className="dh-header-nav dh-block dh-block--with-line">
                <ul
                    onClick={(evt: any) => {
                        console.log('here', evt.target?.tagName, evt.target);
                        if (evt.target?.tagName === 'A') setIsNavOpen(false);
                    }}
                    className="dh-header-nav__list"
                >
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#case-studies">Case Studies</a>
                    </li>
                    <li>
                        <a href="#pet-projects">Pet Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
