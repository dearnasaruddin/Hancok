import { TbWorld } from "react-icons/tb";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {

  let [stckyNav, setStckyNav] = useState(false);
  let [isRresponsiveNav, setIsRresponsiveNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      setStckyNav(true)
    } else {
      setStckyNav(false)
    }
  })

  return (
    <nav className={`w-full fixed z-50 ${stckyNav ? "top-0 bg-secondary py-2 md:py-3 lg:py-4 animate-stickyNav" : "lg:top-6 md:top-6 top-3"} `}>
      <div className='container px-2.5'>

        <div className="flex items-center justify-between lg:justify-start lg:gap-x-16 ">
          <img src="logo.svg" alt="logo.svg" />
          <button onClick={() => setIsRresponsiveNav(!isRresponsiveNav)} type="button" className={`lg:hidden text-3xl ${isRresponsiveNav ? "text-red-500" : "text-white"}`}>{isRresponsiveNav ? <RxCross2 /> : <IoMdMenu />}</button>

          <div className={`lg:w-full py-8 lg:py-0 px-10 lg:px-0 ${isRresponsiveNav ? "flex" : "hidden"} lg:flex flex-col lg:flex-row justify-between items-center absolute lg:static top-12 right-0 bg-secondary lg:bg-transparent`}>
            <ul className=' text-center lg:text-left font-Oswald font-normal text-base text-lightGray flex flex-col lg:flex-row gap-y-2.5 gap-x-8 items-center'>
              <li className='cursor-pointer hover:text-primary duration-300'>Home</li>
              <li className='cursor-pointer hover:text-primary duration-300'>About us</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Tornament</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Store</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Team</li>
              <li className='cursor-pointer hover:text-primary duration-300'>FAQ</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Contact Us</li>
            </ul>
            <ul className='flex items-center gap-x-7 text-white pt-8 lg:pt-0'>
              <li><TbWorld /></li>
              <li className='flex items-center gap-x-2'><FaSignOutAlt /><span className='font-Oswald font-normal text-base'>Sign In</span></li>
              <li><FaSearch /></li>
            </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar