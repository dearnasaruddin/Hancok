import React from 'react'
import galOne from '../assets/galOne.webp'
import galTwo from '../assets/galTwo.webp'
import galThree from '../assets/galThree.webp'
import galFour from '../assets/galFour.webp'
import galFive from '../assets/galFive.webp'
import galSix from '../assets/galSix.webp'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='pb-3 md:pb-6 bg-secondaryBg'>
            <div className="container relative px-2.5">
                <div className="w-full md:flex lg:justify-between md:gap-x-3  items-center bg-primary py-5 md:py-7 pl-3 md:pl-[30px] pr-3 md:pr-4 absolute -top-[83px] left-1/2 -translate-x-1/2">
                    <h2 className='lg:max-w-[725px] font-Barlow-Condensed font-semibold text-2xl xl:text-[40px] lg:leading-[48px] uppercase text-white'>subscribe us to get latest news in your inbox
                        from hancok community</h2>
                    <div className='relative mt-3 md:mt-0'>
                        <input type="email" name="" id="" placeholder='YOUR EMAIL' className='lg:w-[410px] w-full md:min-w-64 py-2.5 pl-5 rounded-[30px] font-Barlow-Condensed font-medium text-base text-dimGray' />
                        <button type="button" className='font-Barlow-Condensed font-medium text-base text-white bg-secondaryBg py-2.5 px-5 lg:px-7 rounded-[30px] absolute right-0 top-0 z-10'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-y-10 gap-x-20 sm:gap-x-0 lg:flex-nowrap justify-center sm:justify-between sm:px-2 md:px-0 pt-28 mb-10 lg:mb-24">
                    <div>
                        <img src="logo.svg" alt="logo.svg" className='mx-auto sm:m-0' />
                        <p className='max-w-[340px] md:max-w-[450px] font-Oswald font-normal text-base uppercase text-center sm:text-start text-dimGray mt-[30px] mb-8 md:mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
                            officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
                            aspernatur aperiam id.</p>
                        <ul className='flex gap-x-2.5 justify-center sm:justify-start text-white'>
                            <li className='size-10 md:size-[50px] text-xl md:text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaFacebookF /></li>
                            <li className='size-10 md:size-[50px] text-xl md:text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaLinkedinIn /></li>
                            <li className='size-10 md:size-[50px] text-xl md:text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaTwitter /></li>
                            <li className='size-10 md:size-[50px] text-xl md:text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaInstagram /></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-white tracking-[1.75px] mb-[30px]'>LINKS</h3>
                        <ul className="flex flex-col items-center sm:items-start gap-y-4 sm:gap-y-[30px]">
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Home</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>About</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Tournament</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-white tracking-[1.75px] mb-[30px]'>TEAMS</h3>
                        <ul className="flex flex-col items-center sm:items-start gap-y-4 sm:gap-y-[30px]">
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>PALADINS</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>CS:GO</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>DOTA 2</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>VALORANT</li>
                        </ul>

                    </div>
                    <div className='w-full lg:w-auto'>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-center lg:text-start text-white tracking-[1.75px] mb-[30px]'>GALLERY</h3>
                        <div className="max-w-full justify-center lg:max-w-[316px] flex flex-wrap gap-[5px]">
                            <div>
                                <img src={galOne} alt="galOne" />
                            </div>
                            <div>
                                <img src={galTwo} alt="galTwo" />
                            </div>
                            <div>
                                <img src={galThree} alt="galThree" />
                            </div>
                            <div>
                                <img src={galFour} alt="galFour" />
                            </div>
                            <div>
                                <img src={galFive} alt="galFive" />
                            </div>
                            <div>
                                <img src={galSix} alt="galSix" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='font-Barlow-Condensed font-normal text-base md:text-xl text-center text-white pt-2 md:pt-6 border-t border-dimGray'>© 2021 All rights reserved by <span className='text-primary'>Themebea.</span></p>
            </div>
        </footer>
    )
}

export default Footer