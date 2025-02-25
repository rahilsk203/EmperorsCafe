import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShareAlt ,FaStar } from "react-icons/fa";

export const Om = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);
  const imageRef = useRef(null);
  let touchStartX = 0;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        if (!response.ok) throw new Error("Failed to fetch menu");
        const data = await response.json();

        if (!data.menu || !Array.isArray(data.menu) || data.menu.length === 0) {
          throw new Error("Invalid menu data");
        }

        setMenuItems(data.menu);
        setSelectedItem(data.menu[0]);
      } catch (error) {
        console.error("Error fetching menu:", error.message);
      }
    };

    fetchMenu();
  }, []);

  // Change Item with Arrows
  const handleChangeItem = (direction) => {
    if (!menuItems.length || !selectedItem) return;

    const currentIndex = menuItems.findIndex((item) => item.name === selectedItem.name);
    if (currentIndex === -1) return;

    const newIndex = direction === "left"
      ? (currentIndex - 1 + menuItems.length) % menuItems.length
      : (currentIndex + 1) % menuItems.length;

    setSelectedItem(menuItems[newIndex]);
    scrollToMenuItem(newIndex);
  };

  // Scroll to Selected Item in Menu
  const scrollToMenuItem = (index) => {
    if (menuRef.current) {
      const menuChildren = menuRef.current.children;
      if (menuChildren[index]) {
        menuChildren[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  // Handle Swipe on Image
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!selectedItem || !menuItems.length) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) handleChangeItem("right"); // Swipe Left → Next Item
    if (diff < -50) handleChangeItem("left"); // Swipe Right → Previous Item
  };

  if (!selectedItem) {
    return <div className="text-center py-10 font-semibold text-gray-700">Loading menu...</div>;
  }

  const currentIndex = menuItems.findIndex((item) => item.name === selectedItem.name) + 1;
  const totalItems = menuItems.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6">
      
      {/* DISPLAY SELECTED ITEM */}
      <div className="w-full max-w-lg flex flex-col items-center">
        <div 
          ref={imageRef} 
          className="p-2 sm:p-3 rounded-3xl w-full"
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        >
          <img 
            src={selectedItem.image1 || "https://via.placeholder.com/400"} 
            alt={selectedItem.name || "Unknown Item"} 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-comfortaa font-bold mt-3 sm:mt-5 text-gray-800">
          {selectedItem.name || "Unknown Item"}
        </h2>
        <p className="text-base sm:text-xl md:text-2xl font-semibold text-amber-600">
          ₹{selectedItem.price || "N/A"}
        </p>

        {/* ITEM COUNTER */}
        <p className="mt-2 text-gray-700 text-sm sm:text-base font-semibold">
          {currentIndex} / {totalItems}
        </p>
      </div>

      {/* MENU SCROLL BELOW IMAGE */}
      <div className="w-full max-w-lg flex items-center">
        <button 
          onClick={() => handleChangeItem("left")} 
          disabled={menuItems.length <= 1} 
          className="p-2 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-500 active:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronLeft size={16} />
        </button>

        <div 
          ref={menuRef} 
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-200 space-x-3 px-2 md:px-4 w-full"
        >
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              onClick={() => { setSelectedItem(item); scrollToMenuItem(index); }}
              className={`flex flex-col items-center p-2 md:p-3 rounded-2xl transition-all duration-300 min-w-[120px] 
                ${selectedItem.name === item.name ? "bg-amber-600 text-white" : "bg-white text-gray-800 border-amber-300"} 
                hover:bg-amber-500 hover:text-white active:bg-amber-700 focus:bg-amber-600 shadow-md`
              }
            > 
              <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r 
                ${selectedItem.name === item.name ? "from-yellow-400 to-orange-500 border-4 border-white shadow-lg scale-105" : "from-gray-200 to-gray-300 border-2 border-transparent"}
                text-white shadow-md transition-all duration-300 transform hover:scale-110 active:scale-105`}
              >
                <span className='text-lg'>{item.icon || "🍽️"}</span>
              </div>
              <h3 className='text-xs md:text-sm font-semibold mt-2'>{item.name || "Unknown"}</h3>
            </button>
          ))}
        </div>

        <button 
          onClick={() => handleChangeItem("right")} 
          disabled={menuItems.length <= 1} 
          className="p-2 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-500 active:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
      {/*ADDITIONAL ICONS*/}
      <div className='mt-4 md:mt-6 flex justify-between space-x-3 md:space-x-4 lg:space-x-6'>
        <div className='flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-xl transform transition hover:scale-110'>
          <FaHeart className='text-red-500' size={20} />
        </div>
        <div className='flex items-center justify-between p-2 md:p-3 bg-white rounded-full shadow-xl transform transition hover:scale-110'>
          <FaStar className='text-yellow-500' size={20} />
        </div>
        <div className='flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-xl transform transition hover:scale-110'>
          <FaShareAlt className='text-blue-500' size={20} />
        </div>
      </div>
    </div>
  );
};

export default Om;