import React from 'react'
import { FaUtensils } from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r
    from-yellow-400 to-orange-500 shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 py-2 w-[95%] md:w-[90%] max-w-7xl
     flex items-center justify-between backdrop-blur-md border-white/20 z-50'> 
   {/*LOGO SECTION */}
   <div className='flex items-center space-x-2'>
    <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
    <FaUtensils className='text-xl text-white animate-pulse'/>
    </div> 
   </div>
   </nav>
  )
}

export default Navbar
