import { useState } from "react";
import { toast } from "react-toastify";



const Card = ({ products, setCount, selectedProducts, setSelectedProducts }) => {
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = () => {

    toast.success(`${products.name}added to cart successfully!`),{
       position: "top-right",
    };
    if (clicked) return;
    setCount(count => count + 1);
    setClicked(true);
    setSelectedProducts([...selectedProducts, products]);
  }





  return (
    <div className="card w-full bg-base-100 shadow-stone-400 rounded-2xl  
      mb-5  ">



      <div className="card-body   hover:bg-blue-100 
       hover:shadow-lg 0 transition-shadow relative
       ">
        <span
          className={`badge badge-xs px-3 text-end 
            py-3 absolute top-2 right-2   font-bold rounded 
            ${products.tag.type === "best-seller"
              ? "bg-yellow-400 text-black"
              : products.tag.type === "popular"
                ? "bg-green-400 text-white"
                : products.tag.type === "new"
                  ? "bg-blue-400 text-white"
                  : "bg-gray-400 text-white"
            }`}
        >
          {products.tag.label}
        </span>
        <p className='text-7xl space-y-5 rounded-full'>{products.icon}</p>
        <div className="">
          <h2 className="text-3xl font-bold">{products.name}</h2>
          <p>{products.description}</p>

          <span className="text-xl font-bold">${products.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>{products.features[0].title}</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>{products.features[1].title}</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>{products.features[2].title}</span>
          </li>

        </ul>
        <div className="mt-6">
          <button
            className={`btn btn-block rounded-full text-white shadow h-12 
       ${clicked
                ? "bg-green-500 scale-95 transition-transform duration-2000"
                : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
              }`}
            onClick={handleAddToCart}
            disabled={clicked}
          >
            {clicked ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;