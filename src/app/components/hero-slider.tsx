
'use client'
import React from 'react'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.css'

export default function HeroSlider() {
  return (
    <section className="swiper mySwiper swiper-slider-hero relative block h-screen" id="home">
            <Swiper className="swiper-wrapper" modules={[Autoplay]} autoplay={true} speed={3000}>
                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url('/images/bg/2.jpg')`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Спортивно-образовательный центр <br/> «МАКСИМУМ»</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Раскройте свой потенциал с нашими образовательными и спортивными программами для детей и взрослых.</p>
                                    
                                    <div className="mt-6">
                                        <Link href="/contactus" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Связаться с нами <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url('/images/bg/3.jpg')`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Найдите идеальную программу <br/> для своих целей</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Более 20 направлений для всестороннего развития в спорте, образовании и творчестве.</p>
                                    
                                    <div className="mt-6">
                                        <Link href="/list" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Начать обучение <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url('/images/bg/4.jpg')`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Добро пожаловать в <br/> центр «МАКСИМУМ»</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Ежедневно с 9.00 до 21.00. Обед с 13.00 до 14.00. Приходите на бесплатное пробное занятие!</p>
                                    
                                    <div className="mt-6">
                                        <Link href="/price" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Прейскурант <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
            </Swiper>     
        </section>
  )
}
