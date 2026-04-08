
import { Suspense, useState } from 'react'
import './App.css'
import Card3section from './components/3cardsection/Card3section'
import ExtraCard from './components/axtraCard/ExtraCard'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { ToastContainer } from 'react-toastify'
import TransparentPricing from './components/Transparent Pricing/TransparentPricing'



  const fatchProduct=  async () => {
     const res = await fetch ("/products.json");
     return res.json();
   }

function App() {

 const productPromise = fatchProduct();

 const [count, setCount] = useState(0)

  return (
    <>

      <Navbar count={count} ></Navbar>
      <Banner></Banner>
      <ExtraCard></ExtraCard>
     <Suspense fallback={<p>⌛loading message...</p>}>
       <Products count={count} setCount={setCount}  productPromise={productPromise}></Products>
     </Suspense>

      <Card3section></Card3section>
      <TransparentPricing></TransparentPricing>


           <ToastContainer />


    </>
  )
}

export default App
