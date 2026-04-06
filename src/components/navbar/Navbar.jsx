import React from 'react';
import logo from '../../assets/shopping-cart-01.png'
const Navbar = () => {


  return (
    <div className="flex justify-between bg-base-100 shadow-sm mx-20">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none"

              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>

              </ul>
            </li>

          </ul>
        </div>
        <a className=" ml-2 text-xl font-bold 
        bg-gradient-to-r from-[#4F39F6] to-[#7412be] 
        bg-clip-text text-transparent">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          <li className='text-[16px] font-semibold text-[#101727]'><a>Products</a></li>
          <li className='text-[16px] font-semibold text-[#101727]'><a>Features</a></li>
          <li className='text-[16px] font-semibold text-[#101727]'><a>Pricing</a></li>
          <li className='text-[16px] font-semibold text-[#101727]'><a>Testimonials</a></li>
          <li className='text-[16px] font-semibold text-[#101727]'><a>FAQ</a></li>

        </ul>
      </div>
      <div className="navbar-end gap-4 p-5">
        <div>
          <p className='text-red-500 p-1 rounded-full '>0</p>
          <img src={logo} className='' alt="" />
        </div>

        <p className='text-[16px] font-semibold text-[#101727] '>Login</p>
        <a className="rounded-full p-2 bg-gradient-to-r 
          text-white font-semibold
          from-[#4F39F6] to-[#9514FA] ">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;