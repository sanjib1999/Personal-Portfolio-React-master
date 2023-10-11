import React, {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation,Scrollbar,A11y} from 'swiper';

import "./Slider.css";
import topper from "../../image/ranker.png";
import em from "../../image/examirror banner.png";
import Pl from "../../image/p1.png";
import P2 from "../../image/p2.png";
import P3 from "../../img/ecommerce.png";
import { themeContext } from "../../Context";

export default function Slider(){

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
    //     <div className="portfolio" id="portfolio">
    //   {/* heading */}
    //         <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
    //         <span>Portfolio</span>
    //         <section id="slider">
    //             <input type="radio" name="slider" id="s1" checked />
    //             <input type="radio" name="slider" id="s2" />
    //             <input type="radio" name="slider" id="s3" />
    //             <input type="radio" name="slider" id="s4" />
    //             <input type="radio" name="slider" id="s5" />


    //             <label htmlFor="s1" id="slider1"><img src={topper} alt="" /></label>
    //             <label htmlFor="s2" id="slider2"><img src={em} alt="" /></label>
    //             <label htmlFor="s3" id="slider3"><img src={Pl} alt="" /></label>
    //             <label htmlFor="s4" id="slider4"><img src={P2 } alt="" /></label>
    //             <label htmlFor="s5" id="slider5"><img src={P3} alt="" /></label>
    //         </section>
    //     </div>
        // <div className="portfolio">
        //     <Swiper
            // effect={'coverflow'}
            // grabCursor={true}
            // centeredSlides={true}
            // loop={true}
            // slidesPerView={'auto'}
            // coverflowEffect={{
            //         rotate: 0,
            //         stretch: 0,
            //         depth: 100,
            //         modifier: 2.5
            //     }}
            // pagination={{el:'.swiper-pagination',clickable:true}}
            // navigation={{
            //     nextEl:'.swiper-button-next',
            //     prevEl:'.swiper-button-prev',
            //     clickable:true
            // }}
            // modules={[EffectCoverflow,Pagination,Navigation]}
            // className='swiper_container'
        //     modules={[Pagination]}
        //     slidesPerView={1}
        //     pagination={{ clickable: true }}
        //     >
        //         <SwiperSlide>
        //             <div className="slides">
        //                 <img src={topper} alt="slide_image" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //         <div className="slides">
        //                 <img src={topper} alt="slide_image" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className="slides">
        //                 <img src={topper} alt="slide_image" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className="slides">
        //                 <img src={topper} alt="slide_image" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className="slides">
        //                 <img src={topper} alt="slide_image" />
        //             </div>
        //         </SwiperSlide>

        //         <div className="slider-controler">
        //             <div className="swiper-button-prev slider-arrow">
        //                 <ion-icon name="arrow-back-outline"></ion-icon>
        //             </div>
        //             <div className="swiper-button-next slider-arrow">
        //                 <ion-icon name="arrow-forward-outline"></ion-icon>
        //             </div>
        //             <div className="swiper-pagination"></div>
        //         </div>
        //     </Swiper>
        // </div>
        <div className="portfolio" id="portfolio">
        {/* heading */}
            <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>
        
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div className="slides">
                <img src={topper} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slides">
                <img src={em} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slides">
                <img src={Pl} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slides">
                <img src={P2} alt="" />
            </div>
        </SwiperSlide>
        {/* <SwiperSlide><img src={em} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Pl} alt="" /></SwiperSlide>
        <SwiperSlide><img src={P2} alt="" /></SwiperSlide> */}
        
      </Swiper>
      </div>
      

    );
}