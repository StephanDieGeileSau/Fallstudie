<<<<<<< HEAD
import React from 'react'



export default function NewsSlider() {

   
    return (
        <div>

        </div>
    )
=======
import React from 'react';
import Slider from 'infinite-react-carousel';
import first from "../Bilder/first.png"
import second from "../Bilder/second.png"
import third from "../Bilder/apple.png"
import fourth from "../Bilder/finanzmarkt.png"

export default function NewsSlider() {
    const settings =  {
        dots: true,
        autoplay: true,
        centerMode: true,
        adaptiveHeight: true,
        centerPadding: 250,
        duration: 300,
        autoplaySpeed: 6000,
        width: 50,
        shift: 70,
        arrows: false
      };
    return (
        <React.Fragment>
            <div id="slider">
                <Slider { ...settings}>
                <div>
                    <h3 class="imgslide"><img src={first}></img></h3>
                </div>
                <div>
                    <h3><img src={second}></img></h3>
                </div>
                <div>
                    <h3><img src={third}></img></h3>
                </div>
                <div>
                    <h3><img src={fourth}></img></h3>
                </div>
                </Slider>
            </div>
        </React.Fragment>
        )
>>>>>>> 96411d1c9991979df2849c6688753270c0815646
}
