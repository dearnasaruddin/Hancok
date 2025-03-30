import React from 'react'
import slideImgOne from '../assets/slideImgOne.png';
import slideImgTwo from '../assets/slideImgTwo.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const PopularGames = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: .5,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: .5,
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    color: "#fff",
                    position: "absolute",
                    bottom: "82px",
                    right: "16px",
                    zIndex: "2"
                }}

                onClick={onClick}>

                <FaAngleRight />

            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    color: "#fff",
                    position: "absolute",
                    bottom: "22px",
                    right: "16px",
                    zIndex: "2"
                }}
                onClick={onClick}>

                <FaAngleLeft />

            </div>
        );
    }

    return (
        <section className='bg-secondaryBg py-10 md:py-90'>
            <div className='container px-2.5 relative pt-12 sm:pt-16 lg:pt-12 xl:pt-0'>
                <div className='absolute right-2.5 xl:right-0 top-0'>
                    <h2 className='max-w-96 md:max-w-[458px] font-Barlow-Condensed font-semibold text-2xl md:text-[38px] leading-normal tracking-[2.66px] text-right ml-auto text-white relative  sm:after:content-[""] sm:after:w-14 md:after:w-[105px] sm:after:h-1 after:bg-primary after:absolute after:bottom-2 md:after:bottom-3 sm:after:right-20 md:after:right-[121px]'>POPULAR GAMES AROUND THE
                        WORLD</h2>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className='flex justify-between items-baseline'>
                            <div>
                                <img src={slideImgOne} alt="slideImgOne" />
                            </div>
                            <div>
                                <img src={slideImgTwo} alt="slideImgTwo" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-baseline'>
                            <div>
                                <img src={slideImgOne} alt="slideImgOne" />
                            </div>
                            <div>
                                <img src={slideImgTwo} alt="slideImgTwo" />
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        </section >
    )
}

export default PopularGames