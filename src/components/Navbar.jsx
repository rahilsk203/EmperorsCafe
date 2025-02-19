
import { useState } from "react";
import { FaUtensils, FaHome, FaListAlt,FaQuoteLeft, FaSearch, FaTimes, FaBars} from "react-icons/fa";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  const menuItems = [
    {icon: <FaHome />, title: 'Home'},
    {icon: <FaUtensils />, title: 'Service'},
    {icon: <FaListAlt />, title: 'Menu'},
    {icon: <FaQuoteLeft />, title: 'Reviews'},
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
   {/*LOGO SECTION*/}
   <div className='hidden md:flex space-x-4 lg:space-x-8'>
     {menuItems.map((item,index)=> (
     <button key={index} className="flex items-center space-x-2 text-black hover:text-orange-600 transition-all duration-300 focus:outline-none">
       <span className="text-lg transition-transform group-hover:scale-125">
         {item.icon}
       </span>
       <span className="text-base font-semibold md:text-sm group-hover:underline decoration-2 underline-offset-4">
         {item.title}
       </span>
     </button>
     ))}
   </div>
   {/* RIGHT SECTION */}
   <div className="flex items-center space-x-3">
     <div className="relative hidden sm:block" >
      <input type="text" placeholder="Search... " className="w-28 md:w-32 lg:w-48 border border-gray-300 rounded-full py-1 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300" />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:scale-110 transition-transform text-base" />
     </div>
     {/*MOBILE TOGGLE*/}
     <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="md:hidden p-2 text-white hover:text-yellow-300 transition-all focus:outline-none" >
       {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
     </button>
   </div>
   {/*MOBILE MENU */}
   <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b focus-red-500 to-orange-600 rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300 transform ${isOpen? "opacity-100 visible scale-110" : "opacity-0 invisible scale-95 "}`}>
     <div className="p-4  space-y-4 " >
       {menuItems.map((item,index)=> (
       <button key={index} className="w-full flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-all focus:outline-none " >
         <span className="text-xl  " >{item. icon}</span>
         <span className="text-lg" >{item.title}</span>
       </button>
       ))}
       
       <div className="sm:hidden" >
         <div className="flex items-center bg-white/20 rounded-full px-3 w-full " >
           <input type="text" placeholder="Search... " className="w-full bg-transparent border-0 text-white py-1 flex-1 focus:outline-none text-sm " />
           <FaSearch className="text-white/80" />
         </div>
       </div>
     </div>
     
   </div>
   </nav>
  )
}

export default Navbar
