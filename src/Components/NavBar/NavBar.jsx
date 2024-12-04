import React from 'react';
import LogoImage from '../../assets/Logo.png';
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { motion } from "motion/react";
const NavMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "About US",
        link: "#",
    },
    {
        id: 3,
        title: "BIKES",
        link: "#",
    },
    {
        id: 4,
        title: "CARS",
        link: "#",
    }
]
const NavBar = () => {
  return (
    <>
        <main className='absolute top-0 left-0 w-full pt-10 z-20 text-white'>
            <motion.div 
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
                className='container'>
                <div className='flex justify-between items-center'>
                    {/* Logo section */}
                    <div>
                        <img src={LogoImage} alt="" className='w-[80px] invert'/>
                    </div>
                    {/* Navbar menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex gap-x-4'>
                            {
                                NavMenu.map((item) => (
                                    <>
                                        <li key={item.id} className='inline-block'>
                                            <a href={item.link} className='inline-block px-6 py-2 uppercase hover:bg-primary duration-200 
                                            rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]'>
                                                {item.title}
                                            </a>
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Hamburger menu */}
                    <div className='flex items-center gap-x-6'>
                        <div className='rounded-icons'>
                            <IoMenu className='text-xl'/>
                        </div>
                        <div className='rounded-icons'>
                            <IoSearch className='text-xl'/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main> 
    </>
  )
}

export default NavBar
