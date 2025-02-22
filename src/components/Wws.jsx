import React, { useState } from "react";
import wws1 from "../assets/wws1.jpg";
import wws2 from "../assets/wws2.jpg";
import wws3 from "../assets/wws3.png";

const Wws = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouchMove = (index) => {
    setActiveIndex(index);
  };

  const handleTouchEnd = () => {
    setActiveIndex(null);
  };

  const services = [
    {
      img: wws1,
      title: "Delicious Pan-Fried",
      text: "Golden Crispy Dumplings with Savory Dipping Sauce – A Perfect Bite Every Time!",
    },
    {
      img: wws2,
      title: "Savory Honey Garlic Chicken",
      text: "Crispy, juicy chicken coated in a rich honey garlic sauce, topped with sesame seeds and fresh scallions – the perfect balance of sweet and spicy!",
    },
    {
      img: wws3,
      title: "Five-Star Quality ⭐",
      text: "Every bite is a masterpiece! Only the best ingredients for an unforgettable experience.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 px-4 sm:px-6 lg:px-20 py-12 md:py-20 xl:py-24">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-red-600 uppercase font-poppins tracking-widest mb-3 animate-fade-in">
          What We Serve
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 font-poppins leading-tight mb-8 sm:mb-12 lg:mb-16">
          Delicious <br className="hidden sm:block" /> Just The Way You Love 🍕 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-4 sm:p-6 transition-transform duration-300 ${
                activeIndex === index ? "scale-105 rotate-3" : ""
              }`}
              onTouchMove={() => handleTouchMove(index)}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.img}
                  className="w-full transition-transform duration-500 h-49 sm:h-56 md:h-48 lg:h-56 xl:h-64 object-cover"
                  alt={service.title}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wws;