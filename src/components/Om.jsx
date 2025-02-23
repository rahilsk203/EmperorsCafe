import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaStar,
  FaShareAlt,
} from "react-icons/fa";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import cupcake1 from "../assets/cupcake1.png";
import cupcake2 from "../assets/cupcake2.png";
import icecream1 from "../assets/icecream1.png";
import icecream2 from "../assets/icecream2.png";

const menuItems = [
  { name: "Burger", price: 25.0, icon: "🍔", image1: burger1, image2: burger2 },
  { name: "Pizza", price: 110.0, icon: "🍕", image1: pizza1, image2: pizza2 },
  {
    name: "Cupcake",
    price: 50.0,
    icon: "🧁",
    image1: cupcake1,
    image2: cupcake2,
  },
  {
    name: "Ice Cream",
    price: 20.0,
    icon: "🍦",
    image1: icecream1,
    image2: icecream2,
  },
];

export const Om = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-col lg:flex-row items-center gap-8'>
    {/*LEFT SECTION*/}
    <div className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-amber-300">
      <h1></h1>
    </div>
    </div>
  )

}

export default Om
