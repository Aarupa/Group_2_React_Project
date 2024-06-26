import React, { useContext } from 'react';
import Slider from "react-slick";
import { ContextCreateApi } from '../Context/ContextApi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hospital() {
    const { slider } = useContext(ContextCreateApi);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container mx-auto py-8 max-w-7xl">
            <Slider {...settings}>
                {slider.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="h-[350px] flex flex-col justify-between rounded-lg shadow-lg bg-white overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex-shrink-0">
                                <img src={item.img} alt={item.name} className="h-[200px] w-full object-cover rounded-t-lg" />
                            </div>
                            <div className="h-[150px] text-center p-4 rounded-b-lg mt-2 bg-gradient-to-r from-blue-100 to-blue-200">
                                <p className="text-xl font-semibold text-gray-800 mb-2">{item.name}</p>
                                <p className="text-base text-gray-600">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hospital;

