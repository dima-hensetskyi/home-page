import React from 'react';
import { Signature } from '@/app/icons';
import { ContactsPanel } from '../ContactsPanel';
import { DownloadResumeBtn } from '../DownloadResumeBtn';

import './index.scss';

const Contact = () => {
    return (
        <section id="contact" className="dh-contact dh-section">
            <div className="dh-block-line-dot" />
            <h3 className="dh-block-title">Contact</h3>
            <div className="dh-contact-content">
                <div className="dh-contact-content__cta"></div>
                <div className="dh-contact-content__details">
                    <h3 className="dh-contact-title">
                        I love making connections,
                        <br /> so please reach out if you want to work with me
                        or just say hello!
                    </h3>
                    <DownloadResumeBtn />
                    <ContactsPanel />
                    <div className="flex justify-end">
                        <Signature />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
