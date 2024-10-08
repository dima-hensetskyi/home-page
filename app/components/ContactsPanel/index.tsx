import React from 'react';

import { GrLinkedin } from 'react-icons/gr';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTelegram, BsGithub } from 'react-icons/bs';

import './index.scss';

export const ContactsPanel = () => {
    return (
        <div className="dh-contacts-panel mt-5">
            <a
                className="dh-contacts-panel__email"
                href="mailto:dmytrohensetskiy@gmail.com"
            >
                <BiLogoGmail />
            </a>
            <a
                className="dh-contacts-panel__telegram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/hens_dima"
            >
                <BsTelegram />
            </a>
            <a
                className="dh-contacts-panel__linkedin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dima-hensetskyi-0a229a206"
            >
                <GrLinkedin />
            </a>
            <a
                className="dh-contacts-panel__github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dima-hensetskyi"
            >
                <BsGithub />
            </a>
        </div>
    );
};
