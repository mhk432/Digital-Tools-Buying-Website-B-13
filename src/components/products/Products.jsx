import React, { use, useState } from 'react';
import AvailableCard from '../selected/AvailableCard';
import SelactedCard from '../selected/SelactedCard';


const Products = ({productPromise ,count, setCount}) => {
    const data=use(productPromise);
    const products = data.products;

    const [selectedType, setselectedType] = useState('available');
    return (
        <div>

            <div className='text-center mx-auto my-40 space-y-5'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[16px] text-gray-500'>Choose from our curated collection of
                    premium digital products designed <br />
                    to boost your productivity and creativity.</p>
                <div>
                    <button
                        onClick={() => setselectedType('available')}
                        className={`btn ${selectedType ===
                            'available' ? "bg-gradient-to-r                           from-[#4F39F6] to-[#9514FA]" :
                            " text-white bg-gray-400 " } 
                  rounded-l-full font-bold text-white`}>Products</button>

                    <button
                        onClick={() => setselectedType('Selected')} className={`btn
             ${selectedType === 'Selected'
        ? "bg-gradient-to-r text-white from-[#4F39F6]  to-[#9514FA]" : " text-black"}  
                  rounded-r-full font-bold text-blue-700`}>({count})/{products.length} Card</button>
                </div>
            </div>
            {selectedType === "available" ? <AvailableCard
            count={count} setCount={setCount} products={products}>

            </AvailableCard > :<SelactedCard></SelactedCard>}
        </div>


    );
};

export default Products;