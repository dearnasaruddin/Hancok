import React from 'react'
import horizon from '../assets/horizon.png'
import disciples from '../assets/disciples.png'
import footballManager from '../assets/footballManager.png'
import updateXII from '../assets/updateXII.png'
import slideImg from '../assets/slideImg.png'

const GamesSale = () => {

    return (
        <section className='bg-secondaryBg py-90'>
            <div className="container">
                <h2 className='max-w-[454px] font-Barlow-Condensed font-semibold text-[38px] tracking-[2.66px] text-right ml-auto text-white relative mb-12 after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:right-[92px]'>TOP GAMES ON BLACK FRIDAY
                    SALE</h2>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <img src={horizon} alt="horizon" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] tracking-[1.5px] text-white mt-[18px] mb-4'>Horizon Zero Dawn™ Complet...</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] text-dimGray mb-5'>Guerrilla Games</p>
                                <div className='flex gap-x-[10px] items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={disciples} alt="disciples" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] tracking-[2.66px] text-white mt-[18px] mb-4'>Disciples: Liberation</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] text-dimGray mb-5'>Frima Studio</p>
                                <div className='flex gap-x-[10px] items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={footballManager} alt="footballManager" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] tracking-[1.5px] text-white mt-[18px] mb-4'>Horizon Zero Dawn™ Complet...</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] text-dimGray mb-5'>Guerrilla Games</p>
                                <div className='flex gap-x-[10px] items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={updateXII} alt="updateXII" />
                            </div>
                            <div>
                                <h5 className='font-Barlow-Condensed font-semibold text-[22px] tracking-[2.66px] text-white mt-[18px] mb-4'>Industries of Titan</h5>
                                <p className='font-Oswald font-normal text-base tracking-[1.6px] text-dimGray mb-5'>Brace Yourself Games</p>
                                <div className='flex gap-x-[10px] items-center font-Oswald font-normal text-base'><span className='inline-block font-Oswald font-normal text-sm bg-primary p-1 text-white'>-40%</span><del className='tracking-[0.96px] text-dimGray'>$19.99</del><p className='text-white'>$7.99</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <h4 className='font-Barlow-Condensed font-medium text-xl text-white mb-7'>Hancok Games Catalog</h4>
                    <div className="flex gap-x-[134px] bg-secondary">
                        <div className="pl-[44px] pt-11">
                            <h6 className='font-Oswald font-medium text-base tracking-[1.6px] text-primary'>Choose Your Favourite Game</h6>
                            <h3 className='max-w-[580px] font-Barlow-Condensed font-semibold text-[38px] text-white my-4'>Explore hancok catalog for your next
                                favorite game!</h3>
                            <p className='max-w-[600px] font-Oswald font-semibold text-base text-dimGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus culpa ratione enim maiores
                                nisi cupiditate non nesciunt officia labore aut? Et, vero!</p>
                            <button type="button" className='py-3 px-8 font-Oswald font-medium text-base bg-primaryBg text-white mt-6'>Browse All</button>
                        </div>
                        <div className='py-[42px]'>
                            <img src={slideImg} alt="slideImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamesSale