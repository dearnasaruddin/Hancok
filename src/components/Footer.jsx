import React from 'react'
import galOne from '../assets/galOne.png'
import galTwo from '../assets/galTwo.png'
import galThree from '../assets/galThree.png'
import galFour from '../assets/galFour.png'
import galFive from '../assets/galFive.png'
import galSix from '../assets/galSix.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' pb-6 bg-secondaryBg'>
            <div className="container relative">
                <div className="w-full flex justify-between items-center bg-primary py-7 pl-[30px] pr-4 absolute -top-[88px] left-1/2 -translate-x-1/2">
                    <h2 className='max-w-[725px] font-Barlow-Condensed font-semibold text-[40px] uppercase text-white'>subscribe us to get latest news in your inbox
                        from hancok community</h2>
                    <div className='relative'>
                        <input type="email" name="" id="" placeholder='YOUR EMAIL' className='w-[410px] py-[10px] pl-5 rounded-[30px] font-Barlow-Condensed font-medium text-base text-dimGray' />
                        <button type="button" className='font-Barlow-Condensed font-medium text-base text-white bg-secondaryBg py-[10px] px-7 rounded-[30px] absolute right-0 top-0 z-10'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="flex justify-between pt-28 mb-24">
                    <div>
                        <img src="logo.svg" alt="logo.svg" />
                        <p className='max-w-[450px] font-Oswald font-normal text-base uppercase text-dimGray mt-[30px] mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
                            officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
                            aspernatur aperiam id.</p>
                        <ul className='flex gap-x-[10px] text-white'>
                            <li className='size-[50px] text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaFacebookF /></li>
                            <li className='size-[50px] text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaLinkedinIn /></li>
                            <li className='size-[50px] text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaTwitter /></li>
                            <li className='size-[50px] text-[28px] flex justify-center items-center rounded-full bg-[#212529] hover:bg-primary duration-300'><FaInstagram /></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-white tracking-[1.75px] mb-[30px]'>LINKS</h3>
                        <ul className="flex flex-col gap-y-[30px]">
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Home</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>About</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Tournament</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-white tracking-[1.75px] mb-[30px]'>TEAMS</h3>
                        <ul className="flex flex-col gap-y-[30px]">
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>PALADINS</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>CS:GO</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>DOTA 2</li>
                            <li className='font-Oswald font-normal text-base cursor-pointer text-dimGray hover:text-primary duration-300 '>VALORANT</li>
                        </ul>

                    </div>
                    <div>
                        <h3 className='font-Barlow-Condensed font-semibold text-[25px] text-white tracking-[1.75px] mb-[30px]'>GALLERY</h3>
                        <div className="max-w-[316px] flex flex-wrap gap-[5px]">
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
                <p className='font-Barlow-Condensed font-normal text-xl text-center text-white pt-6 border-t border-dimGray'>© 2021 All rights reserved by <span className='text-primary'>Themebea.</span></p>
            </div>
        </footer>
    )
}

export default Footer