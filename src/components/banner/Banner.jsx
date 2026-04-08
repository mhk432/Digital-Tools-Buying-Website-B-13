import React from 'react';
import playButton from '../../assets/Vector (2).png'
import banner from '../../assets/banner.png'
import Reactangele from '../../assets/Rectangle 4.png'

const Banner = () => {
    return (
        <div className=" bg-base-200 mx-20">
            <div className=" flex items-center justify-between
             flex-col lg:flex-row-reverse gap-2  py-5">
                <img
                    src={banner}
                    className="rounded-lg w-2/4 h-[700px]" />
                
                <div className='p-5 space-y-10   w-3/6'>
                   

                    <div>
                        <button className="   bg-blue-100 transition flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium">
                            <img src={Reactangele} alt="" className="w-4 h-4 " />
                           <span className='bg-gradient-to-r from-[#4F39F6] to-[#7412be] 
        bg-clip-text text-transparent'> New: AI-Powered Tools Available</span>
                        </button>
                    </div>

                    <div className=''>
                        <h1 className="text-7xl font-extrabold  ">Supercharge Your <br /> Digital Workflow </h1>
                    <p className="py-6 ">
        Access premium AI tools, design assets, templates, and productivity  
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className=' flex gap-2'>
                        <button className="btn btn-primary  
         rounded-full text-white font-semibold bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA]">Get Started</button>
                        <button className='btn rounded-full border border-blue-400 bg-gradient-to-r from-[#4F39F6] to-[#7412be] 
        bg-clip-text text-transparent'><img src={playButton} alt="" /> Watch Demo</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;