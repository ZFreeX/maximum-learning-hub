
import React from 'react'
import Link from 'next/link'
import Navbar from './components/navbar/navbar'
import HeroSlider from './components/hero-slider'
import AboutOne from './components/about-one'
import Features from './components/features'
import CoursesTwo from './components/courses/courses-two'
import Cta from './components/cta'
import Team from './components/team'
import Client from './components/client'
import GetInTouch from './components/get-in-touch'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'
import Switcher from './components/switcher'

import { coursesData } from './data'
import Tagline from './components/navbar/tagline'

export default function Page() {
  return (
    <>
        <Tagline/>

        <Navbar navlight={true} tagline={true}/>

        <HeroSlider/>

        
        <div className="container relative -mt-12 z-1">
            <div className="flex justify-center">
                <div className="lg:w-3/4 md:w-11/12 p-6 bg-white dark:bg-slate-900 rounded-xl shadow shadow-slate-100 dark:shadow-slate-800">
                    <form className="relative mx-auto">
                        <input type="text" id="searchCourse" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Поиск..."/>
                        <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Найти</button>
                    </form>
                </div>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <AboutOne title={false}/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Наши направления</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Спортивно-образовательный центр «МАКСИМУМ» предлагает широкий выбор образовательных и спортивных программ</p>
                </div>

                <Features/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Популярные курсы</h4>
                    
                    <p className="text-slate-400 max-w-xl mx-auto">Откройте для себя мир знаний с нашим центром «МАКСИМУМ»</p>
                </div>
                
                <div className="grid lg:grid-cols-2 mt-6 gap-6">
                    {coursesData.slice(0,8).map((item,index)=>{
                        return(
                            <CoursesTwo item={{...item, hidePrice: true, hideTeacher: true}} key={index}/>
                        )
                    })}
                    
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link href="/list" className="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">Больше курсов <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
                </div>
            </div>
        </section>

        <Cta/>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Наши преподаватели</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Опытные профессионалы своего дела</p>
                </div>
                <Team/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Отзывы наших студентов</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Мнения тех, кто уже прошел обучение в нашем центре</p>
                </div>

                <Client/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <GetInTouch/>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>
        <Switcher/>
    </>
  )
}
