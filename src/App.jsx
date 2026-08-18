
import axios from 'axios'
import './App.css'
import Banner from './HomePage/Banner/Banner'
import NavBar from './HomePage/NavBar/NavBar'
import Products from './HomePage/Products/Products'
import Rating from './HomePage/Rating/Rating'
import Tools from './HomePage/Tools/Tools'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import StepSection from './HomePage/StepSection/StepSection'
import PricingSection from './HomePage/PricingSection/PricingSection'
import WorkFlow from './HomePage/WorkFlow/WorkFlow'
import Footer from './HomePage/Footer/Footer'
import { Divide } from 'lucide-react'

 {/*Card Data Fetch START*/}
    const cartDataPromise = axios.get('data.json')
  {/*Card Data Fetch END*/}

function App() {

 

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
      

      <Suspense fallback={
        <div className='flex justify-center items-center'>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      }>
          <Products  active={active} setActive={setActive} toggleCart={toggleCart} setToggleCart={setToggleCart} cartCount={cartCount} setCartCount={setCartCount}  cartDataPromise={cartDataPromise}></Products>
      </Suspense>

      <ToastContainer position='top-left' containerId='top-left'></ToastContainer>
      <ToastContainer position='top-center' containerId='top-center'></ToastContainer>
      <ToastContainer position='top-right' containerId='top-right'></ToastContainer>

      <StepSection></StepSection>
      <PricingSection></PricingSection>
      <WorkFlow></WorkFlow>
   </main>

   <footer>
    <Footer></Footer>
   </footer>

 
   

    </>
  )
}

export default App
