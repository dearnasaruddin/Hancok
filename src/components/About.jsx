import React from 'react'
import { FaCheck, FaAngleDoubleRight } from "react-icons/fa";
import aboutImg from '../assets/about.png'

const About = () => {
    return (
        <section className='bg-primaryBg pt-8 pb-20'>
            <div className='container'>
                <h2 className='max-w-[518px] font-Oswald font-semibold text-[38px] text-white tracking-[2.66px] relative mb-14 after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:right-[181px]'>ABOUT THE BIGGEST HANCOK
                    COMMUNITY</h2>
                <div className="flex items-center gap-x-20 mb-12">
                    <div>
                        <img src={aboutImg} alt="aboutImg" />
                    </div>
                    <div className='text-white'>
                        <h4 className='font-Oswald font-semibold text-[27px] tracking-[0.81px] mb-1'>MOST POPULAR GAMING PLATFORM.</h4>
                        <ul className='font-Barlow-Condensed font-normal text-lg flex flex-col gap-y-1'>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />World Bigghest Community & Gaming Server</li>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />Friendly Clan & Mates</li>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />We Provide Gaming Accesories</li>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />Largest Online Gaming Community & Shop</li>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />Hancok reaches more than 150 million monthly users</li>
                            <li className='flex items-center gap-x-[10px]'><FaCheck className='text-primary' />We are leading global media brand for games</li>
                        </ul>
                        <p className='max-w-[466px] font-Oswald font-normal text-lg mt-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo sed odio
                            temporibus magni quia eveniet odit placeat repellat quod ipsum modi
                            necessitatibus, dolorum officia!</p>
                        <button type="button" className='font-Oswald font-normal text-base flex items-center gap-x-2 bg-secondary text-white px-5 py-3 mt-7 hover:bg-primary hover:text-white duration-300'>View More<FaAngleDoubleRight className='mt-1' /></button>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-x-5 text-white'>
                    <div className="grow pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-6xl'>112k<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-lg mt-4'>Community Earning</p>
                    </div>
                    <div className="grow pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-6xl'>12M<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-lg mt-4'>Total Member</p>
                    </div>
                    <div className="grow pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-6xl'>100k<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-lg mt-4'>Streams Complete</p>
                    </div>
                    <div className="grow pt-8 pb-7 text-center rounded-es-[50px] rounded-se-[50px] bg-secondary">
                        <h3 className='font-Barlow-Condensed font-semibold text-6xl'>844<span className='size-3 inline-block rounded-full bg-primary ml-2'></span></h3>
                        <p className='font-Oswald font-light text-lg mt-4'>Total Sponsers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About