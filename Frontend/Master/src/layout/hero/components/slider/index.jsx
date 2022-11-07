import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import hero_slider_data from '../../../../data/hero_slider_data';
import './style.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function HeroSlider() {

  const theme = useSelector((state) => state.theme.value);
  const [selectedMenu, setSeletedMenu] = useState(hero_slider_data[0])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  }
  return (
    <div className="relative">
      {/* <div style={{backgroundImage: 'url(/assets/images/home-menu-goldbar.svg)'}} className="z-50 absolute top-0 left-0"></div> */}
      <div className="absolute top-14 z-10  w-10 h-[120px] left-0"></div>
      <div className="absolute top-14 z-20">
        <div className='hover:cursor-pointer'>
          <div style={{backgroundImage: `url(/assets/images/${theme.activeTheme == 'light' ? 'hero_slider__item_container_light' : 'hero_slider__item_container_dark'}.svg)`}} className="hero_slider__bar h-[120px] w-[164px] flex justify-center bg-cover items-center">
            <div className="slider-menu-container  p-5">
              <img src={selectedMenu.icon}/>
              {
                selectedMenu.text.length == 12 ?
                <p className='text-[#A8A8A8] mt-[10px] text-center text-[7px] leading-[13.5px] font-[500]'>{selectedMenu.text}</p>
                :
                <p className='text-[#A8A8A8] mt-[10px] text-center text-[9px] leading-[13.5px] font-[500]'>{selectedMenu.text}</p>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 right-0 top-14 overflow-hidden'>        
      <div  style={{backgroundImage: 'url(/assets/images/home-menu-goldbar.svg)'}} className="bg-center bg-no-repeat">

        <div className="ml-10">
          <Slider {...settings}>
            {
              hero_slider_data.map((data, index) => (
                <div key={index} onClick={() => setSeletedMenu(data)} className='hover:cursor-pointer'>
                  <div style={{backgroundImage: `url(/assets/images/${theme.activeTheme == 'light' ? 'hero_slider__item_container_light' : 'hero_slider__item_container_dark'}.svg)`}} className="hero_slider__bar h-[120px] w-[164px] flex justify-center bg-cover items-center">
                    <div className="slider-menu-container  p-5">
                      <img src={data.icon}/>
                      {
                        data.text.length == 12 ?
                        <p className='text-[#A8A8A8] mt-[10px] text-center text-[7px] leading-[13.5px] font-[500]'>{data.text}</p>
                        :
                        <p className='text-[#A8A8A8] mt-[10px] text-center text-[9px] leading-[13.5px] font-[500]'>{data.text}</p>
                      }
                    </div>
                  </div>
                </div>
              ))
            }
            </Slider>
        </div>
        </div>
      </div>
    </div>
  )
}
