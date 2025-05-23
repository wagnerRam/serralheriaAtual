'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


import slide1 from "../../../public/1.jpg"
import slide2 from "../../../public/2.jpg"
import slide3 from "../../../public/3.jpg"
export function Hero() {

    const settings = {
        dots: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoPlaySpeed: 1000,
    }
    
    return (
        <div className="mb-30">
            <Slider {...settings}>
                <div className="relative">
                    <Image 
                    src={slide1}
                    alt="Slide 1"
                    width={1920}
                    height={1180}
                    style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="absolute top-135 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-black transition">
                        Solicite um Orçamento
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Image 
                    src={slide2}
                    alt="Slide 2"
                    width={1920}
                    height={1080}
                    style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="absolute top-135 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-black transition">
                        Solicite um Orçamento
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Image 
                    src={slide3}
                    alt="Slide 3"
                    width={1920}
                    height={1080}
                    style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="absolute top-135 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-black transition">
                        Solicite um Orçamento
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}