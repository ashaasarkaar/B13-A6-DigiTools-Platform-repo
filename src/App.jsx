
import axios from 'axios'
import './App.css'
import Banner from './HomePage/Banner/Banner'
import NavBar from './HomePage/NavBar/NavBar'
import Products from './HomePage/Products/Products'
import Rating from './HomePage/Rating/Rating'
import Tools from './HomePage/Tools/Tools'
import { Suspense, useState } from 'react'

function App() {

  {/*Card Data Fetch START*/}
    const cartDataPromise = axios.get('data.json')
  {/*Card Data Fetch END*/}

  {/*Cart Count State START*/}
  const[cartCount, setCartCount] = useState(0)
  {/*Cart Count State END*/}

  {/* product and cart toggle state START*/}
     const[active, setActive] = useState('Products')
      {/* product and cart toggle state END*/}

      {/*Toggoling Cart State START*/}
    const[toggleCart, setToggleCart] = useState([])
    {/*Toggoling Cart State END*/}



  return (
    <>
   
   <header>
      <NavBar cartCount={cartCount}></NavBar>
   </header>

   <main>
      <Banner></Banner>
      <Rating></Rating>
      <Tools active={active} setActive={setActive} cartCount={cartCount} toggleCart={toggleCart} setToggleCart={setToggleCart}></Tools>
      

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Products active={active} setActive={setActive} toggleCart={toggleCart} setToggleCart={setToggleCart} cartCount={cartCount} setCartCount={setCartCount}  cartDataPromise={cartDataPromise} ></Products>
      </Suspense>
   </main>

 
   

    </>
  )
}

export default App
