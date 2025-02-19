import React, { useState } from "react";
import Bannervideo from "../assets/Bannervideo.mp4";
import BannerArrow from '../assets/BannerArrow.png';
import BannerClock from '../assets/BannerClock.png';
import Bannersmall1 from '../assets/Bannersmall1.png';
import Bannersmall2 from '../assets/Bannersmall2.png';
import Bannersmall3 from '../assets/Bannersmall3.png';
import FireIcon from '../assets/FireIcon.png';

const Banner = () => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-white pt-12 md:pt-24 min-h-[500px] items-center">
      {/* VIDEO MODEL */}
     {showVideo && ( <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
        <button className=" absolute -to-8 right-0 text-white text-2xl" onClick={()=> setShowVideo(false)}>
          &times;
        </button>
        <div className=" aspect-video">
          <iframe src={Bannervideo} width="100%" height="100%" allow="autoplay" allowFullScreen className="rounded-lg">
          </iframe>
        </div>
      </div>
      </div>)}

      <div className="container mx-auto px-6 md:px"></div>
    </div>
  );
};



export default Banner;
