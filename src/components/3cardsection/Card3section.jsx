import React from 'react';
import  useReducer   from '../../assets/user.png' ;
import choosepRoduct from '../../assets/package.png' ;
import roketplayer from'../../assets/rocket.png' ;

const Card3section = () => {
    return (
        <div>
           <div className='mx-12 my-10'>

            <div className='mx-auto text-center space-y-5'>
            <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
            <p className='text-[16px] text-gray-500'>Follow these simple steps to get started with our digital tools:</p>
              </div>

            <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-5
              py-16 px-10  '>
                <div className='shadow-lg  bg-[#FFFFFF]  rounded-lg 
                py-10  text-center'>
                    <div  className=' text-white flex justify-between'>
                        <p></p>

                    <p className='bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA] px-4 rounded-full mr-5 mb-12'>1</p>
                    </div>
                    <div className='space-y-4 mx-auto flex 
                    flex-col justify-center items-center'>
                        <img src={useReducer} className='w-20 
                        h-20 bg-purple-200 rounded-full p-2' alt="User" />
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='text-[16px] text-gray-500'>Sign 
                        up for free in seconds. 
                        No credit card <br /> required to get started.</p>

                    </div>
                </div>
               
                
                <div className='shadow-lg  bg-[#FFFFFF]  rounded-lg py-10 px-3 text-center'>
                    <div  className=' text-white flex justify-between'>
                        <p></p>

                    <p className='bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA] px-4 rounded-full mr-5 mb-12'>2</p>
                    </div>
                    <div className='space-y-4 mx-auto flex flex-col justify-center items-center'>
                        <img src={choosepRoduct} className='w-20 
                        h-20 bg-purple-200 rounded-full p-2' alt="Choose Product" />
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='text-[16px] text-gray-500'>Browse our catalog and select the tools <br />
                        that fit your needs..</p>

                    </div>
                </div>
               
                
                <div className='shadow-lg  bg-[#FFFFFF]  rounded-lg py-10 px-3 text-center'>
                    <div  className=' text-white flex justify-between'>
                        <p></p>

                    <p className='bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA] px-3  rounded-full mr-5 mb-12'>3</p>
                    </div>
                    <div className=' space-y-4  mx-auto flex flex-col justify-center items-center'>
                        <img src={roketplayer} className='w-20 
                        h-20 bg-purple-200 rounded-full p-2' alt="roket" />
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='text-[16px] text-gray-500'>Download 
                        and start using your premium <br /> 
                        tools immediately.</p>

                    </div>
                </div>
               
                
                
            </div>
            </div> 
        </div>
    );
};

export default Card3section;