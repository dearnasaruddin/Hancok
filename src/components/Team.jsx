import React from 'react'
import teamOne from '../assets/teamOne.png'
import teamTwo from '../assets/teamTwo.png'
import teamThree from '../assets/teamThree.png'
import teamFour from '../assets/teamFour.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
    return (
        <section className='py-[100px] bg-secondaryBg'>
            <div className="container">
                <h2 className='max-w-[498px] font-Barlow-Condensed font-semibold text-[38px] tracking-[2.66px] text-right ml-auto text-white relative mb-[50px] after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:right-[92px]'>MEET OUR PROFESSIONAL ELITE
                    TEAM</h2>
                <div className="flex justify-between gap-x-5 gap-y-[30px] flex-wrap">
                    <div className="grow relative overflow-hidden group">
                        <img src={teamOne} alt="teamOne" />
                        <div className="w-full pt-6 pr-14 pb-[30px] pl-[30px] bg-primaryBg absolute -bottom-[128px] group-hover:pt-10 group-hover:bottom-0 duration-300 left-0">
                            <h4 className='font-Barlow-Condensed font-semibold text-[30px] text-white'>Paladins</h4>
                            <p className='max-w-[300px] font-Oswald font-normal text-base text-white mt-7 group-hover:mt-[6px] duration-300 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec ullamcorper
                            </p>
                            <div className="flex justify-between">
                                <button type="button" className='font-Oswald font-normal text-base text-white bg-primary py-1 px-5'>Know more</button>
                                <ul className="social flex gap-x-5">
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'> <FaFacebookF /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaLinkedinIn /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grow relative overflow-hidden group">
                        <img src={teamTwo} alt="teamTwo" />
                        <div className="w-full pt-6 pr-14 pb-[30px] pl-[30px] bg-primaryBg absolute -bottom-[128px] group-hover:pt-10 group-hover:bottom-0 duration-300 left-0">
                            <h4 className='font-Barlow-Condensed font-semibold text-[30px] text-white'>CS:GO</h4>
                            <p className='max-w-[300px] font-Oswald font-normal text-base text-white mt-7 group-hover:mt-[6px] duration-300 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec ullamcorper
                            </p>
                            <div className="flex justify-between">
                                <button type="button" className='font-Oswald font-normal text-base text-white bg-primary py-1 px-5'>Know more</button>
                                <ul className="social flex gap-x-5">
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'> <FaFacebookF /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaLinkedinIn /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grow relative overflow-hidden group">
                        <img src={teamThree} alt="teamThree" />
                        <div className="w-full pt-6 pr-14 pb-[30px] pl-[30px] bg-primaryBg absolute -bottom-[128px] group-hover:pt-10 group-hover:bottom-0 duration-300 left-0">
                            <h4 className='font-Barlow-Condensed font-semibold text-[30px] text-white'>DOTA 2</h4>
                            <p className='max-w-[300px] font-Oswald font-normal text-base text-white mt-7 group-hover:mt-[6px] duration-300 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec ullamcorper
                            </p>
                            <div className="flex justify-between">
                                <button type="button" className='font-Oswald font-normal text-base text-white bg-primary py-1 px-5'>Know more</button>
                                <ul className="social flex gap-x-5">
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'> <FaFacebookF /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaLinkedinIn /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grow relative overflow-hidden group">
                        <img src={teamFour} alt="teamFour" />
                        <div className="w-full pt-6 pr-14 pb-[30px] pl-[30px] bg-primaryBg absolute -bottom-[128px] group-hover:pt-10 group-hover:bottom-0 duration-300 left-0">
                            <h4 className='font-Barlow-Condensed font-semibold text-[30px] text-white'>VALORANT</h4>
                            <p className='max-w-[300px] font-Oswald font-normal text-base text-white mt-7 group-hover:mt-[6px] duration-300 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec ullamcorper
                            </p>
                            <div className="flex justify-between">
                                <button type="button" className='font-Oswald font-normal text-base text-white bg-primary py-1 px-5'>Know more</button>
                                <ul className="social flex gap-x-5">
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'> <FaFacebookF /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaLinkedinIn /></li>
                                    <li className='size-[35px] rounded-full text-xl flex justify-center items-center text-white bg-primary cursor-pointer'><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team