import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelactedCard = ({selectedProducts}) => {
    console.log(selectedProducts);
     



    return (
        <div className='px-20'>
            {
                selectedProducts.map((product,ind ) => {

         return <div key={ind} className='border-2
          border-gray-300 rounded-lg p-4 mb-6 flex items-center
           justify-between gap-4 bg-white shadow shadow-xl'>
                    <div className='flex items-center gap-4 p-4'>

                      <div>
                        <p className='text-5xl'>{product.icon}</p>
                      </div>
                   <div>
                     <h2 className='font-bold text-2xl'>{product.name}</h2>
                    <p className='text-[16px] text-gray-500'>${product.price.toFixed(2)}</p>
                   </div>
                    </div>

                   <button className='btn  text-red-600 text-2xl bg-white rounded-full p-2'><MdDelete /></button>
                </div>
                })}
             
             
        </div>
    );
};

export default SelactedCard;