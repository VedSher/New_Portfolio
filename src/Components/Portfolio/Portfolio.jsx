import React from 'react';
import portfolioCSS from "../Portfolio/Portfolio.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

function Portfolio() {
  return (
    <div className={`${portfolioCSS.portfolioWrapper} section`} id="portfolio">
            <h2>My Portfolio</h2>
            <p className={portfolioCSS.pera}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aperiam placeat eveniet? Iste debitis veniam corrupti placeat officia itaque vitae!</p>
    
            <Swiper className={portfolioCSS.swiper}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={
                    {
                        0:{
                            slidesPerView:1
                        },
                        768:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        },
                    }
                }
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card1}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Facebook Post</h2>
                            <h3>Facebook</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card2}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Instagram Post</h2>
                            <h3>Instagram</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card3}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Twitter Post</h2>
                            <h3>Twitter</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card4}`}>
                        <div className={portfolioCSS.content}>
                            <h2>LinkedIn Post</h2>
                            <h3>LinkedIn</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Portfolio