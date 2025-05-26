import React from 'react'
import horizon from '../assets/horizon.webp'
import disciples from '../assets/disciples.webp'
import footballManager from '../assets/footballManager.webp'
import updateXII from '../assets/updateXII.webp'
import slideImg from '../assets/slideImg.webp'

const GamesSale = () => {

    return (
        <section className='bg-secondaryBg py-10 lg:py-90'>
            <div className="container px-2.5">
                <h2 className='max-w-80 md:max-w-[454px] font-Barlow-Condensed font-semibold text-2xl md:text-[38px] leading-normal tracking-[2.66px] text-right ml-auto text-white relative mb-12 sm:after:content-[""] sm:after:w-14 md:after:w-[120px] sm:after:h-1 after:bg-primary after:absolute sm:after:bottom-2 md:after:bottom-3 sm:after:right-16 md:after:right-[92px]'>TOP GAMES ON BLACK FRIDAY
                    SALE</h2>
                <div>
                    <div className="flex justify-center  md:justify-between flex-wrap md:flex-nowrap gap-x-6 md:gap-x-3 xl:gap-x-0 gap-y-8 md:gap-y-0">
                        <div>
                            <div>
                                <img src={horizon} alt="horizon" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] md:text-lg lg:text-[22px] tracking-[1.5px] text-white mt-2 lg:mt-[18px] mb-1 lg:mb-4'>Horizon Zero Dawn™ Complet...</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] md:tracking-[0] lg:tracking-[1.6px] text-dimGray mb-2.5 lg:mb-5'>Guerrilla Games</p>
                                <div className='flex gap-x-2.5 items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={disciples} alt="disciples" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] md:text-lg lg:text-[22px] tracking-[2.66px] text-white mt-2 lg:mt-[18px] mb-1 lg:mb-4'>Disciples: Liberation</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] md:tracking-[0] lg:tracking-[1.6px] text-dimGray mb-2.5 lg:mb-5'>Frima Studio</p>
                                <div className='flex gap-x-2.5 items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={footballManager} alt="footballManager" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] md:text-lg lg:text-[22px] tracking-[1.5px] text-white mt-2 lg:mt-[18px] mb-1 lg:mb-4'>Horizon Zero Dawn™ Complet...</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] md:tracking-[0] lg:tracking-[1.6px] text-dimGray mb-2.5 lg:mb-5'>Guerrilla Games</p>
                                <div className='flex gap-x-2.5 items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={updateXII} alt="updateXII" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] md:text-lg lg:text-[22px] tracking-[2.66px] text-white mt-2 lg:mt-[18px] mb-1 lg:mb-4'>Industries of Titan</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] md:tracking-[0] lg:tracking-[1.6px] text-dimGray mb-2.5 lg:mb-5'>Brace Yourself Games</p>
                                <div className='flex gap-x-2.5 items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <h4 className='font-Barlow-Condensed font-medium text-xl text-white mb-7 pl-2.5 sm:pl-0'>Hancok Games Catalog</h4>
                    <div className="flex items-center lg:items-start lg:gap-x-[134px] bg-secondary flex-wrap-reverse md:flex-nowrap">
                        <div className="pl-3 md:pl-[44px] md:pt-11 lg:pb-12 xl:pb-0">
                            <h6 className='font-Oswald font-medium text-base tracking-[1.6px] text-primary'>Choose Your Favourite Game</h6>
                            <h3 className='max-w-80 md:max-w-96 lg:max-w-[580px] font-Barlow-Condensed font-semibold text-[22px] md:text-[38px] text-white my-2 lg:my-4'>Explore hancok catalog for your next
                                favorite game!</h3>
                            <p className='max-w-[600px] font-Oswald font-semibold text-base text-dimGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus culpa ratione enim maiores
                                nisi cupiditate non nesciunt officia labore aut? Et, vero!</p>
                            <button type="button" className='py-3 px-8 font-Oswald font-medium text-base bg-primaryBg text-white hover:bg-primary duration-300 mt-6 mb-10 lg:mb-0'>Browse All</button>
                        </div>
                        <div className='py-[42px] mx-auto md:m-0'>
                            <img src={slideImg} alt="slideImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamesSale