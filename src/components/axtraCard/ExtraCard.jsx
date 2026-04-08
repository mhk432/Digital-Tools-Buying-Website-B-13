import React from 'react';


const ExtraCard = () => {
    return (
       <div className="bg-gradient-to-r from-[#4F39F6] to-[#7412be]">
  <div className=" mx-auto px-4 sm:px-8 lg:px-40 py-12 sm:py-20 flex flex-col sm:flex-row justify-between text-center gap-10 sm:gap-0">
    
    {/* Active Users */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white">50K+</h2>
      <p className="text-xl sm:text-2xl text-white font-medium">Active Users</p>
    </div>

    {/* Premium Tools */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white">200K+</h2>
      <p className="text-xl sm:text-2xl text-white font-medium">Premium Tools</p>
    </div>

    {/* Rating */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white">4.9</h2>
      <p className="text-xl sm:text-2xl text-white font-medium">Rating</p>
    </div>

  </div>
</div>
    );
};

export default ExtraCard;