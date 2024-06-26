import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextCreateApi } from "../Context/ContextApi";
import './HomeSlider.css'; // Create and import a CSS file for additional styles

function HomeSlider() {
    const sliderRef = useRef(null);
    const { hospitalSlider } = useContext(ContextCreateApi);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="slider-container relative">
            <Slider ref={sliderRef} {...settings}>
                {hospitalSlider.map((item, index) => (
                    <div key={index} className="slider-item">
                        <div className="slide-content h-screen md:h-[90vh] w-full flex flex-col md:flex-row relative overflow-hidden">
                            <div className="text-content flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-4 md:p-8">
                                <div className="text-overlay p-4 rounded-md text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 md:mb-6 font-sans tracking-wide">
                                        {item.name}
                                    </h1>
                                    <p className="text-base md:text-xl font-semibold mb-4 md:mb-6 font-sans tracking-wide">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                            <div className="image-content w-full md:w-1/2 flex justify-center items-center">
                                <img
                                    src={item.img}
                                    alt={item.altText}
                                    className="slider-image rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute inset-0 flex justify-between items-center px-4 md:px-12">
                <button onClick={goToPrevSlide} className="control-button bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={goToNextSlide} className="control-button bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HomeSlider;

