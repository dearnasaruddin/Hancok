import React from 'react'
import liveImgOne from '../assets/liveImgOne.png'
import liveImgTwo from '../assets/liveImgTwo.png'
import liveImgThree from '../assets/liveImgThree.png'
import teamDeltaLogo from '../assets/teamDeltaLogo.png'
import teamAlphaLogo from '../assets/teamAlphaLogo.png'
import teamDevilsLogo from '../assets/teamDevilsLogo.png'
import teamNinjaLogo from '../assets/teamNinjaLogo.png'

const Tournament = () => {
    return (
        <section className='bg-primaryBg py-90'>
            <div className="container">
                <h2 className='max-w-[466px] font-Oswald font-semibold text-[38px] text-white tracking-[2.66px] relative mb-[68px] after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:left-[154px]'>LIVE STREAMIN VIDEO BY
                    HANCOK</h2>
                <div className="flex gap-x-5 justify-between items-center">
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
                <h3 className='font-Barlow-Condensed font-medium text-[25px] tracking-[2.25px] text-center text-white mt-[60px] mb-[50px]'>PREVIOUS MATCHES</h3>
                <div className='max-w-[1096px] mx-auto flex gap-2 justify-between gap-y-[60px] flex-wrap'>
                    <div className='clipPath w-[426px] bg-secondary flex gap-x-[122px] items-center py-2 pl-1'>
                        <div>
                            <img src={teamDeltaLogo} alt="teamDeltaLogo" />
                        </div>
                        <div>
                            <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white'>TEAM DELTA</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h3 className='font-Oswald font-medium text-[40px] tracking-[6px] text-white'>9:12</h3>
                    </div>
                    <div className='clipPathRev w-[426px] bg-secondary flex gap-x-[122px] justify-end items-center py-2 pr-1'>
                        <div>
                            <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white'>TEAM ALPHA</h4>
                        </div>
                        <div>
                            <img src={teamAlphaLogo} alt="teamAlphaLogo" />
                        </div>
                    </div>
                    <div className='clipPath w-[426px] bg-secondary flex gap-x-[122px] items-center py-2 pl-1'>
                        <div>
                            <img src={teamDevilsLogo} alt="teamDevilsLogo" />
                        </div>
                        <div>
                            <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white'>TEAM DEVILS</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h3 className='font-Oswald font-medium text-[40px] tracking-[6px] text-white'>17:8</h3>
                    </div>
                    <div className='clipPathRev w-[426px] bg-secondary flex gap-x-[122px] justify-end items-center py-2 pr-1'>
                        <div>
                            <h4 className='font-Barlow-Condensed font-medium text-2xl tracking-[0.96px] text-white'>TEAM NINJA</h4>
                        </div>
                        <div>
                            <img src={teamNinjaLogo} alt="teamNinjaLogo" />
                        </div>
                    </div>
                </div>1
            </div>
        </section>
    )
}

export default Tournament