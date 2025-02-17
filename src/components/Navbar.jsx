import React from 'react'
import { FaUtensils } from "react-icons/fa";


const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

 
  const menuItems = [
    {icon: <FaHome/>, title: 'Home', link: '/'},
    {icon: <FaHome/>, title: 'Home', link: '/'},
    {icon: <FaHome/>, title: 'Home', link: '/'},
    {icon: <FaHome/>, title: 'Home', link: '/'}
  ]

  return (

   <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r
    from-yellow-400 to-orange-500 shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 py-2 w-[95%] md:w-[90%] max-w-7xl
     flex items-center justify-between backdrop-blur-md border-white/20 z-50'> 
   {/*LOGO SECTION */}
   <div className='flex items-center space-x-2'>
    <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
    <FaUtensils className='text-xl text-white animate-pulse'/>
    </div> 
    <h1 className='text-xl font-pacifico lg:text-2xl md:text:sm font-bold text-black'>
    EMPEROR'S <span className='text-orange-800 ml-2'>CAFE</span>
    </h1>
   </div>
   </nav>
  )
}

export default Navbar
