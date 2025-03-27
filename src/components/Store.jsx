import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import gameController from '../assets/gameController.png'
import keyboard from '../assets/keyboard.png'
import monitor from '../assets/monitor.png'
import mouse from '../assets/mouse.png'

const Store = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "50%", color: "#fff", position: "absolute", top: "50%", right: "0", transform: "translate(50%, -50%)", background: "#FF4655", zIndex: "2" }}
        onClick={onClick}
      ><FaAngleRight /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "50%", color: "#fff", position: "absolute", top: "50%", left: "0", transform: "translate(-50%, -50%)", background: "#FF4655", zIndex: "2" }}
        onClick={onClick}
      ><FaAngleLeft /></div>
    );
  }


  return (
    <section className='py-90 bg-primaryBg'>
      <div className="container">
        <h2 className='max-w-[466px] font-Oswald font-semibold text-[38px] text-white tracking-[2.66px] relative mb-[102px] after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:left-[224px]'>WE PROVIDE ALL GAMING ACCESORIES</h2>

        <Slider {...settings}>
          <div>
            <div className="h-[465px] flex gap-x-5 justify-between items-center">
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$95</h3>
                <img src={gameController} alt="gameController" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Controller</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$32</h3>
                <img src={keyboard} alt="keyboard" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Keyboard</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>

              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$103</h3>
                <img src={monitor} alt="monitor" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Monitor</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$80</h3>
                <img src={mouse} alt="mouse" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Mouse</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[465px] flex gap-x-5 justify-between items-center">
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$95</h3>
                <img src={gameController} alt="gameController" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Controller</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$32</h3>
                <img src={keyboard} alt="keyboard" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Keyboard</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>

              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$103</h3>
                <img src={monitor} alt="monitor" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Monitor</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
              <div className='grow h-full flex flex-col justify-between pt-[22px] pb-6 bg-secondary'>
                <h3 className='font-Oswald font-medium text-[40px] tracking-[0.4px] text-center text-white'>$80</h3>
                <img src={mouse} alt="mouse" className='mx-auto' />
                <div>
                  <h4 className='font-Oswald font-semibold text-center text-[25px] mb-2 text-white'>Gaming Mouse</h4>
                  <p className='font-Oswald font-semibold text-base text-primary text-center uppercase'>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>

      </div>
    </section>
  )
}

export default Store