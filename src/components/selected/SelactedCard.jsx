import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import emtyicon from '../../assets/portfolio.png'

const SelactedCard = ({selectedProducts, setSelectedProducts,count, setCount}) => {
    


     
  const handeleDeleteSealctProduct = (product) =>{
        toast.error(`${product.name} removed from card`), {
            position: "top-left",
            autoClose: 3000,}
    const restProducts = selectedProducts.filter( (p) => p.id !== product.id);
    setSelectedProducts(restProducts);
    setCount(count - 1);

  }

  const handeleCheackOut = () => {
    if(selectedProducts.length === 0){
        toast.error("No products selected for checkout.")
        
    }
        else{

            toast.success("Checkout successful! Thank you for your purchase.")
            setSelectedProducts([]);
            setCount(0);
        }    

   
  }

//   handle delete selected product and update count and show toast notification

  const totalPrice = selectedProducts.reduce((total, product) =>
     total + product.price, 0);

    return (
        <div className='px-20'>
            { selectedProducts.length === 0 ? 
            <div className=' flex flex-col items-center gap-4 mt-20 mb-20 bg-gray-200
             p-10 rounded-lg '>
              <img src={emtyicon} alt="" />
            <p className='text-center text-2xl font-bold'>No products selected yet.</p>
            </div> :
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

                   <button className='btn  text-red-600 text-2xl
      bg-white rounded-full p-2' 
       onClick={() => handeleDeleteSealctProduct(product)}><MdDelete /></button>
                </div>
                })}
             
             <div className="my-10 p-6 bg-white border-2
              border-amber-400 rounded-2xl w-full ">
                <div className="flex justify-between items-center text-3xl font-bold">
                    <h3>Total Price:</h3>
                    <h3 className="text-green-600">${totalPrice}</h3>
                </div>
            </div>

             <button className='bg-gradient-to-r text-white from-[#2110a3] 
             to-[#9514FA]
              btn btn-block rounded-full ' onClick={handeleCheackOut}>Proceed to Checkout</button>
        </div>

    );
};

export default SelactedCard;
