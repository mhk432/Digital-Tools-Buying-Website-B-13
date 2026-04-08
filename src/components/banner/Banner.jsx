import React from 'react';
import playButton from '../../assets/Vector (2).png'
import banner from '../../assets/banner.png'
import Reactangele from '../../assets/Rectangle 4.png'

const Banner = () => {
    return (
       <div className="bg-base-200">
  <div className=" mx-auto px-4 sm:px-8 lg:px-16 py-10 flex flex-col lg:flex-row-reverse items-center gap-8">
    
    {/* Banner Image */}
    <img
      src={banner}
      alt="Banner"
      className="rounded-lg w-full lg:w-1/2 h-auto lg:h-[700px] object-cover"
    />

    {/* Content */}
    <div className="w-full lg:w-1/2 p-5 space-y-8">
      
      {/* New AI Tools Button */}
      <div>
        <button className="bg-blue-100 transition flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium">
          <img src={Reactangele} alt="Icon" className="w-4 h-4" />
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#7412be] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </button>
      </div>

      {/* Headline */}
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="py-4 sm:py-6 text-gray-700 text-base sm:text-lg">
          Access premium AI tools, design assets, templates, and productivity  
          software—all in one place. Start creating faster today. Explore Products
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn btn-primary rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>
          <button className="btn rounded-full border border-blue-400 bg-gradient-to-r from-[#4F39F6] to-[#7412be] bg-clip-text text-transparent flex items-center gap-2">
            <img src={playButton} alt="Play" className="w-5 h-5" /> Watch Demo
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
    );
};

export default Banner;