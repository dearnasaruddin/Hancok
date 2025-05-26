import React from 'react'
import { FaCheck, FaAngleDoubleRight } from "react-icons/fa";
import aboutImg from '../assets/about.webp'

const About = () => {
    return (
        <section className='bg-primaryBg pt-8 pb-8 md:pb-20'>
            <div className='container px-2.5'>
                <h2 className='max-w-[450px] md:max-w-[518px] font-Oswald font-semibold text-2xl md:text-[38px] leading-normal text-white tracking-[2.66px] relative mb-14 sm:after:content-[""] sm:after:w-14 md:after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-2 md:after:bottom-3 after:left-[150px] md:after:left-[217px]'>ABOUT THE BIGGEST HANCOK
                    COMMUNITY</h2>

                <div className="flex flex-wrap md:flex-nowrap items-center md:gap-x-4 lg:gap-x-20 gap-y-7 mb-8 md:mb-12">
                    <div className='md:w-2/3 lg:w-auto'>
                        <img src={aboutImg} alt="aboutImg" />
                    </div>
                    <div className='text-white'>
                        <h4 className='font-Oswald font-semibold text-xl md:text-[27px] leading-normal tracking-[0.81px] mb-1'>MOST POPULAR GAMING PLATFORM.</h4>
                        <ul className='font-Barlow-Condensed font-normal text-base md:text-lg flex flex-col lg:gap-y-1'>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />World Bigghest Community & Gaming Server</li>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />Friendly Clan & Mates</li>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />We Provide Gaming Accesories</li>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />Largest Online Gaming Community & Shop</li>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />Hancok reaches more than 150 million monthly users</li>
                            <li className='flex items-center gap-x-2.5'><FaCheck className='text-primary' />We are leading global media brand for games</li>
                        </ul>
                        <p className='md:max-w-sm lg:max-w-[466px] font-Oswald font-normal text-base md:text-lg mt-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo sed odio
                            temporibus magni quia eveniet odit placeat repellat quod ipsum modi
                            necessitatibus, dolorum officia!</p>
                        <button type="button" className='font-Oswald font-normal text-base flex items-center gap-x-2 bg-secondary text-white px-5 py-3 mt-7 hover:bg-primary hover:text-white duration-300'>View More<FaAngleDoubleRight className='mt-1' /></button>
                    </div>
                </div>

                <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-x-5 gap-y-5 text-white'>
                    <div className="md:grow min-w-40 sm:w-56 md:w-auto pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-4xl sm:text-6xl'>112k<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-base sm:text-lg mt-2 sm:mt-4'>Community Earning</p>
                    </div>
                    <div className="md:grow min-w-40 sm:w-56 md:w-auto pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-4xl sm:text-6xl'>12M<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-base sm:text-lg mt-2 sm:mt-4'>Total Member</p>
                    </div>
                    <div className="md:grow min-w-40 sm:w-56 md:w-auto pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-4xl sm:text-6xl'>100k<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-base sm:text-lg mt-2 sm:mt-4'>Streams Complete</p>
                    </div>
                    <div className="md:grow min-w-40 sm:w-56 md:w-auto pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-4xl sm:text-6xl'>844<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-base sm:text-lg mt-2 sm:mt-4'>Total Sponsers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About