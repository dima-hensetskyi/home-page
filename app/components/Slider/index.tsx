'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';

import { ArrowBtn } from './ArrowBtn';

import './index.scss';

const settings = {
    adaptiveHeight: false,
    arrows: true,
    dots: false,
    dotsClass: 'slider-gallery__dots',
    infinite: true,
    nextArrow: <ArrowBtn />,
    prevArrow: <ArrowBtn />,
    slidesToScroll: 1,
    slidesToShow: 2,
    cssEase: 'linear',
    speed: 300,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                cssEase: 'linear',
                centerMode: true,
                centerPadding: '7px',
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640,
            settings: {
                cssEase: 'linear',
                centerMode: true,
                centerPadding: '7px',
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

interface SliderPropsType extends Settings {
    children: React.ReactNode;
    title?: string | React.ReactNode;
}

export const DSlider: React.FC<SliderPropsType> = ({
    children,
    title,
    ...props
}: SliderPropsType) => {
    return (
        <div className="noma-slider-wrapper">
            <div className="noma-slider-header">
                {typeof title === 'string' ? (
                    <p className="noma-slider-title">{title}</p>
                ) : (
                    title
                )}
            </div>
            <Slider className="noma-slider" {...settings} {...props}>
                {children}
            </Slider>
        </div>
    );
};
