import React from 'react';
import playButton from '../../assets/Vector (2).png'
import banner from '../../assets/banner.png'
import Reactangele from '../../assets/Rectangle 4.png'

const Banner = () => {
    return (
        <div className=" bg-base-200 mx-20">
            <div className=" flex items-center flex-col lg:flex-row-reverse gap-16 py-5">
                <img
                    src={banner}
                    className="rounded-lg  h-[500px] w-1/2"
                />
                <div className=''>
                    <div className='bg-blue-50  rounded-full'>
                        <p className='flex p-3 gap-1 ml-6 bg-gradient-to-r from-[#4F39F6] 
                    to-[#7412be] 
        bg-clip-text text-transparent rounded-full'><img src={Reactangele} alt="" /> New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className="text-5xl font-extrabold  ">Supercharge Your <br /> Digital Workflow </h1>
                    <p className="py-6 ">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className=' flex gap-2'>
                        <button className="btn btn-primary bg-gradient-to-r 
         rounded-full text-white font-semibold from-[#4F39F6] to-[#9514FA]">Get Started</button>
                        <button className='btn rounded-full border border-blue-400 bg-gradient-to-r from-[#4F39F6] to-[#7412be] 
        bg-clip-text text-transparent'><img src={playButton} alt="" /> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;