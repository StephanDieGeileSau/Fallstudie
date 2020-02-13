import React from 'react';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from "../Bilder/first.png";
import second from "../Bilder/second.png";
import third from "../Bilder/apple.png";
import fourth from "../Bilder/finanzmarkt.png";

export default function NewsSlider() {
    const settings =  {
        dots: true,
        autoplay: true,
        duration: 300,
        autoplaySpeed: 60000,
        arrows: false,
        showThumbs: false,
      };

    return (
        <div class="Carousel-wrapper">
            <Carousel { ...settings}>
                <div>
                    <img src={first}></img> 
                </div>
                <div>
                    <img src={second} />
                </div>
                <div>
                    <img src={third} />
                </div>
                <div>
                    <img src={fourth} />
                </div>
            </Carousel>
        </div>
    );   
};

 

