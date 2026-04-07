
import { Suspense } from 'react'
import './App.css'
import Card3section from './components/3cardsection/Card3section'
import ExtraCard from './components/axtraCard/ExtraCard'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'





  const fatchProduct=  async () => {
     const res = await fetch ("/products.json");
     return res.json();
   }

function App() {

 const productPromise = fatchProduct();



  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <ExtraCard></ExtraCard>
     <Suspense fallback={<p>⌛loading message...</p>}>
       <Products productPromise={productPromise}></Products>
     </Suspense>

      <Card3section></Card3section>





    </>
  )
}

export default App
