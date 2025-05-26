import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import gameController from '../assets/gameController.webp'
import keyboard from '../assets/keyboard.webp'
import monitor from '../assets/monitor.webp'
import mouse from '../assets/mouse.webp'

const Store = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 2,
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
          ...style, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "50%", color: "#fff", position: "absolute", top: "50%", right: "0", transform: "translate(50%, -50%)", background: "#FF4655", zIndex: "2"
        }}
        onClick={onClick}
      ><FaAngleRight /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "50%", color: "#fff", position: "absolute", top: "50%", left: "0", transform: "translate(-50%, -50%)", background: "#FF4655", zIndex: "2"
        }}
        onClick={onClick}
      ><FaAngleLeft /></div>
    );
  }


  return (
    <section className='py-10 lg:py-90 bg-primaryBg'>
      <div className="container px-2.5">
        <h2 className='max-w-96 md:max-w-[466px] font-Oswald font-semibold text-2xl md:text-[38px] md:leading-normal text-white tracking-[2.66px] relative mb-12 md:mb-[102px] sm:after:content-[""] sm:after:w-14 md:after:w-[120px] sm:after:h-1 after:bg-primary after:absolute sm:after:bottom-2 md:after:bottom-3 sm:after:left-40 md:after:left-[224px]'>WE PROVIDE ALL GAMING ACCESORIES</h2>

        <div>
          <Slider {...settings}>
            {/* <div className="h-[465px] flex gap-x-5 justify-between items-center"></div> */}
            <div>
              <div className='border-x-8 lg:border-x-[10px] border-primaryBg h-64 sm:h-72 lg:h-80 xl:h-[465px] flex flex-col justify-between pt-4 lg:pt-[22px] pb-4 lg:pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-2xl lg:text-[40px] tracking-[0.4px] text-center text-white'>$95</h3>
                <img src={gameController} alt="gameController" className='mx-auto w-2/3' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-xl lg:text-[25px] mb-0.5 md:mb-2 text-white'>Gaming Controller</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
            <div>
              <div className='border-x-8 lg:border-x-[10px] border-primaryBg h-64 sm:h-72 lg:h-80 xl:h-[465px] flex flex-col justify-between pt-4 lg:pt-[22px] pb-4 lg:pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-2xl lg:text-[40px] tracking-[0.4px] text-center text-white'>$32</h3>
                <img src={keyboard} alt="keyboard" className='mx-auto w-2/3' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-xl lg:text-[25px] mb-0.5 md:mb-2 text-white'>Gaming Keyboard</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
            <div>
              <div className='border-x-8 lg:border-x-[10px] border-primaryBg h-64 sm:h-72 lg:h-80 xl:h-[465px] flex flex-col justify-between pt-4 lg:pt-[22px] pb-4 lg:pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-2xl lg:text-[40px] tracking-[0.4px] text-center text-white'>$103</h3>
                <img src={monitor} alt="monitor" className='mx-auto w-2/3' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-xl lg:text-[25px] mb-0.5 md:mb-2 text-white'>Gaming Monitor</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
            <div>
              <div className='border-x-8 lg:border-x-[10px] border-primaryBg h-64 sm:h-72 lg:h-80 xl:h-[465px] flex flex-col justify-between pt-4 lg:pt-[22px] pb-4 lg:pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-2xl lg:text-[40px] tracking-[0.4px] text-center text-white'>$80</h3>
                <img src={mouse} alt="mouse" className='mx-auto w-2/3' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-xl lg:text-[25px] mb-0.5 md:mb-2 text-white'>Gaming Mouse</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

      </div>
    </section>
  )
}

export default Store