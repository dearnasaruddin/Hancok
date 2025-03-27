import React from 'react'
import { FaAngleDoubleRight, FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className='bg-bannerImg bg-no-repeat bg-center bg-cover'>
            <div className="container">
                <div className="font-Oswald text-white pt-[338px] pb-[102px]">
                    <h3 className='font-normal text-3xl tracking-[2.7px] mb-4'>LIFE TIME</h3>
                    <h1 className='font-semibold text-6xl inline-block relative after:content-["] after:w-[90px] after:h-1 after:absolute after:-right-28 after:bottom-0 after:bg-white'>GAMING EXPERIENCE</h1>
                    <p className='font-normal text-base max-w-[520px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias voluptas optio.
                        Veritatis recusandae pariatur qui dignissimos dolore similique ad adipisci eum. Quos
                        aliquid fugiat magni illum eius?</p>
                    <button type="button" className='flex items-center gap-x-2 bg-white text-[#121212] px-5 py-3 mt-12 mb-[300px] hover:bg-primary hover:text-white duration-300'>View More<FaAngleDoubleRight className='mt-1' /></button>

                    <ul className="flex items-center gap-x-5">
                        <li className='size-9 rounded-full text-black bg-[#D9D9D9] flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white duration-300'><FaFacebookF /></li>
                        <li className='size-9 rounded-full text-black bg-[#D9D9D9] flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white duration-300'><FaLinkedinIn /></li>
                        <li className='size-9 rounded-full text-black bg-[#D9D9D9] flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white duration-300'><FaTwitter /></li>
                        <li className='size-9 rounded-full text-black bg-[#D9D9D9] flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white duration-300'><FaInstagram /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner