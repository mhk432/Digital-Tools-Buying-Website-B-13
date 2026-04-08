import React from 'react';
import logo from '../../assets/shopping-cart-01.png'
const Navbar = ({ count }) => {


  return (
   <div className="bg-base-100 shadow-sm lg:px-20">
  <div className=" mx-auto   lg:px-16 flex items-center justify-between lg:py-4">

    {/* Left / Logo + Mobile Dropdown */}
    <div className="flex items-center gap-4">
      {/* Mobile Menu */}
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost p-2">
          
        </label>
        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-2 w-52 p-2 shadow z-10">
          <li>
            <a>Products</a>
          </li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* Logo */}
      <a className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#7412be] bg-clip-text text-transparent">
        DigiTools
      </a>
    </div>

    {/* Center Menu (Desktop) */}
    <div className="hidden md:block lg:flex space-x-6">
      <a className="text-[16px] font-semibold text-[#101727] hover:text-purple-600">Products</a>
      <a className="text-[16px] font-semibold text-[#101727] hover:text-purple-600">Features</a>
      <a className="text-[16px] font-semibold text-[#101727] hover:text-purple-600">Pricing</a>
      <a className="text-[16px] font-semibold text-[#101727] hover:text-purple-600">Testimonials</a>
      <a className="text-[16px] font-semibold text-[#101727] hover:text-purple-600">FAQ</a>
    </div>

    {/* Right / Cart + Buttons */}
    <div className="flex items-center gap-3">
      {/* Cart + Logo */}
      <div className=" gap-2 px-2 py-1 bg-white shadow rounded-full">
        <p className="text-white px-2 rounded-full bg-red-600 text-sm font-semibold">{count}</p>
        <img src={logo} alt="Logo" className="w-6 h-6" />
      </div>

      {/* Login */}
      <button className="hidden md:block lg:block text-[16px] font-semibold text-[#101727] px-4 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200">
        Login
      </button>

      {/* Get Started */}
      <a className="hidden md:block lg:block  text-white font-semibold rounded-full px-4 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
        Get Started
      </a>
    </div>
  </div>
</div>
  );
};

export default Navbar;