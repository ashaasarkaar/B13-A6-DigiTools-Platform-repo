
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

  return (
    <>
   
   <header>
      <NavBar cartCount={cartCount}></NavBar>
   </header>

   <main>
      <Banner></Banner>
      <Rating></Rating>
      <Tools cartCount={cartCount}></Tools>
      

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Products cartCount={cartCount} setCartCount={setCartCount}  cartDataPromise={cartDataPromise} ></Products>
      </Suspense>
   </main>

 
   

    </>
  )
}

export default App
