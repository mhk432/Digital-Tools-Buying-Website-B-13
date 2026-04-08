import React from 'react';

import instra from '../assets/Instagram (1).png'
import x from '../assets/fi_5968958.png'


const Footer = () => {
  return (
    <div className=' '>
      <div className=' bg-black'>

        <footer className=" footer sm:footer-horizontal
      overflow-hidden    p-20">
          <aside>
            <h1 className='text-4xl font-bold text-white mb-2'>DigiTools</h1>
            <p className=' text-white'>
              Premium digital tools for creators, <br /> professionals,
              and businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </aside>
          <nav>
            <h6 className="text-white footer-title text-xl">Product</h6>
            <a className=" text-white link link-hover">Features</a>
            <a className=" text-white link link-hover">Pricing</a>
            <a className=" text-white link link-hover">Integrations</a>
            <a className=" text-white link link-hover ">Templates</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white text-xl">Company</h6>
            <a className="text-white link link-hover">About us</a>
            <a className="text-white link link-hover">Contact</a>
            <a className="text-white link link-hover">Blog</a>
            <a className="text-white link link-hover">Press</a>
            
          </nav>
          <nav>
            <h6 className="footer-title text-white text-xl">Resources</h6>
            <a className="text-white link link-hover">Documentation</a>
            <a className="text-white link link-hover">Community</a>
            <a className="text-white link link-hover">Help Center</a>
          </nav>

          <nav className='  '>
            <a className="link link-hover text-2xl text-white">Social Links</a>

            <div className='flex gap-4 mt-2 '>
              <a href=""><img src={instra} alt="" className='bg-white p-2 rounded-full w-max' /></a>
              <a href=""><img className='bg-white p-2 rounded-full w-max' src={x} alt="" /></a>
              <a href=""> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                className=" bg-white p-2 rounded-full w-max">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg></a>
            </div>


          </nav>

        </footer>
        <div className="pb-5 divider divider-start px-20
         before:bg-gray-500 after:bg-gray-500 text-white">
  
        </div >
          <div className='pb-20 flex px-20 justify-between items-center gap-4 text-gray-200 '>
            <div>
               <p className='text-center text-sm text-gray-200'>Copyright © 2026 - All right reserved by DigiTools Ltd</p>

            </div>
            <div className='flex gap-2'>
              <p>Privacy Policy </p>
              <p>Policy </p>
              <p>Cookies</p>
            </div>
          </div>


      </div>
    </div>
    
  );
};

export default Footer;
