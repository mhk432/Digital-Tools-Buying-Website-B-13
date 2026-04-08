import React from 'react';


const ExtraCard = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#7412be] 
         '>
            <div className='mx-20 flex text-center justify-between px-30 py-20'>
                <div className=''>
              <h2 className='text-5xl font-extrabold text-white' >50K+</h2>
            
                    <p  className='text-2xl text-white font-medium'>Active Users</p>
                </div>
                <div>
                    <h2 className='text-5xl font-extrabold text-white' >200K+</h2>
                    <p  className='text-2xl text-white font-medium'>Premium Tools</p>
                </div>
                <div>
                    <h2 className='text-5xl font-extrabold text-white'>4.9</h2>
                    <p className='text-2xl text-white font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraCard;