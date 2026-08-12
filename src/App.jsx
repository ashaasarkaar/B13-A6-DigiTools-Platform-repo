
import './App.css'
import Banner from './HomePage/Banner/Banner'
import NavBar from './HomePage/NavBar/NavBar'
import Rating from './HomePage/Rating/Rating'
import Tools from './HomePage/Tools/Tools'

function App() {
  

  return (
    <>
   
   <header>
      <NavBar></NavBar>
   </header>

   <main>
      <Banner></Banner>
      <Rating></Rating>
      <Tools></Tools>
   </main>

 
   

    </>
  )
}

export default App
