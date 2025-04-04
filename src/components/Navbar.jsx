import { TbWorld } from "react-icons/tb";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

  let [stckyNav, setStckyNav] = useState(false);

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 140){
      setStckyNav(true)
    }else{
      setStckyNav(false)
    }
  })

  return (
    <nav className={`w-full fixed z-50 ${stckyNav ? "top-0 bg-secondary py-2 md:py-3 lg:py-4 animate-stickyNav" : "lg:top-6 md:top-6 top-3"} `}>
      <div className='container px-2.5'>

        <div className="flex items-center justify-between lg:justify-start lg:gap-x-16">
          <img src="logo.svg" alt="logo.svg" />
          <button type="button" className="text-3xl lg:hidden text-white"><IoMdMenu /></button>

          <div className="w-full hidden lg:flex justify-between items-center">
            <ul className='font-Oswald font-normal text-base text-lightGray flex gap-x-8 items-center'>
              <li className='cursor-pointer hover:text-primary duration-300'>Home</li>
              <li className='cursor-pointer hover:text-primary duration-300'>About us</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Tornament</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Store</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Team</li>
              <li className='cursor-pointer hover:text-primary duration-300'>FAQ</li>
              <li className='cursor-pointer hover:text-primary duration-300'>Contact Us</li>
            </ul>
            <ul className='flex items-center gap-x-7 text-white'>
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