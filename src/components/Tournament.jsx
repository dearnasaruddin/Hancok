import React from 'react'
import liveImgOne from '../assets/liveImgOne.webp'
import liveImgTwo from '../assets/liveImgTwo.webp'
import liveImgThree from '../assets/liveImgThree.webp'
import teamDeltaLogo from '../assets/teamDeltaLogo.webp'
import teamAlphaLogo from '../assets/teamAlphaLogo.webp'
import teamDevilsLogo from '../assets/teamDevilsLogo.webp'
import teamNinjaLogo from '../assets/teamNinjaLogo.webp'

const Tournament = () => {
    return (
        <section className='bg-primaryBg py-8 md:py-90'>
            <div className="container px-2.5">
                <h2 className='max-w-96 md:max-w-[466px] font-Oswald font-semibold text-2xl md:text-[38px] leading-normal text-white tracking-[2.66px] relative mb-7 md:mb-[68px] sm:after:content-[""] sm:after:w-14 md:after:w-[120px] sm:after:h-1 after:bg-primary after:absolute after:bottom-2 md:after:bottom-3 after:left-28 md:after:left-[154px]'>LIVE STREAMIN VIDEO BY
                    HANCOK</h2>
                <div className="flex gap-x-2 md:gap-x-5 justify-between items-center">
                    <div className="grow">
                        <img src={liveImgOne} alt="liveImgOne" />
                    </div>
                    <div className="grow">
                        <img src={liveImgTwo} alt="liveImgTwo" />
                    </div>
                    <div className="grow">
                        <img src={liveImgThree} alt="liveImgThree" />
                    </div>
                </div>
                <h3 className='font-Barlow-Condensed font-medium text-[25px] tracking-[2.25px] text-center text-white mt-[60px] mb-7 md:mb-[50px]'>PREVIOUS MATCHES</h3>
                <div >
                    <div className='max-w-[1096px] mx-auto flex gap-x-5 mb-5 md:mb-[60px] md:gap-x-0 justify-center md:justify-between'>
                        <div className='clipPath min-w-[30%] sm:min-w-[20%] md:w-[370px] lg:w-[426px] bg-secondary flex md:gap-x-14 lg:gap-x-[122px] items-center py-2 md:pl-1'>
                            <div className='mx-auto md:m-0'>
                                <img src={teamDeltaLogo} alt="teamDeltaLogo" />
                            </div>
                            <div className='hidden md:block'>
                                <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white whitespace-nowrap'>TEAM DELTA</h4>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h3 className='font-Oswald font-medium text-3xl sm:text-[40px] tracking-[6px] text-white'>9:12</h3>
                        </div>
                        <div className='clipPathRev min-w-[30%] sm:min-w-[20%] md:w-[370px] lg:w-[426px] bg-secondary flex md:gap-x-14 lg:gap-x-[122px] justify-end items-center py-2 md:pr-1'>
                            <div className='hidden md:block'>
                                <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white whitespace-nowrap'>TEAM ALPHA</h4>
                            </div>
                            <div className='mx-auto md:m-0'>
                                <img src={teamAlphaLogo} alt="teamAlphaLogo" />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1096px] mx-auto flex gap-x-5 md:gap-x-0 justify-center md:justify-between'>
                        <div className='clipPath min-w-[30%] sm:min-w-[20%] md:w-[370px] lg:w-[426px] bg-secondary flex md:gap-x-14 lg:gap-x-[122px] items-center py-2 md:pl-1'>
                            <div className='mx-auto md:m-0'>
                                <img src={teamDevilsLogo} alt="teamDevilsLogo" />
                            </div>
                            <div className='hidden md:block'>
                                <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white whitespace-nowrap'>TEAM DEVILS</h4>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h3 className='font-Oswald font-medium text-3xl sm:text-[40px] tracking-[6px] text-white'>17:8</h3>
                        </div>
                        <div className='clipPathRev min-w-[30%] sm:min-w-[20%] md:w-[370px] lg:w-[426px] bg-secondary flex md:gap-x-14 lg:gap-x-[122px] justify-end items-center py-2 md:pr-1'>
                            <div className='hidden md:block'>
                                <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white whitespace-nowrap'>TEAM NINJA</h4>
                            </div>
                            <div className='mx-auto md:m-0'>
                                <img src={teamNinjaLogo} alt="teamNinjaLogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tournament