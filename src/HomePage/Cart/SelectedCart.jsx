
import SelectedCartEmpty from '../EmptySelectedCart/SelectedCartEmpty';
import SelectedToggleCard from './SelectedToggleCard';

const SelectedCart = ({ toggleCart,setToggleCart, cartCount, setCartCount}) => {
    console.log(SelectedCart)

    const totalPrice = toggleCart.reduce(
        (total, item) => total + Number(item.price),
        0
    );

    const handleDeleteCartBtn = (selectedToggleCard)=>{
        const filterDeleteCard =  toggleCart.filter(filterCard => filterCard.name !== selectedToggleCard.name)
        setToggleCart(filterDeleteCard);
        setCartCount(cartCount-1)
    }

{/*Cart Empty after clicking Proceed Button START*/}
    const handleProceedBtn = () =>{
           setToggleCart([])
           setCartCount(0)
    }
{/*Cart Empty after clicking Proceed Button END*/}

    return (

       <div>
            {
                toggleCart.length === 0
                ? <SelectedCartEmpty></SelectedCartEmpty>
                :  <div className='w-10/12 mx-auto border-1 border-gray-500 p-10 rounded-2xl shadow-2xl mt-10 mb-50'>

              {/* heading START */}
          <div>
            <h1 className='font-bold text-2xl mb-2'>Your Cart</h1>
          </div>
           {/* heading END */}

            

            { 
                 toggleCart.map((selectedToggleCard, index) => <SelectedToggleCard key={index} handleDeleteCartBtn={handleDeleteCartBtn} selectedToggleCard={selectedToggleCard}></SelectedToggleCard>)
            
            }



            {/* total count section START */}
            <div className='flex justify-between items-center mt-2'>
                <p className='text-[#627382]'>Total:</p>
                <p className='font-bold text-2xl'> ${Math.floor(totalPrice)}</p>

            </div>
            {/* total count section END */}

            {/* proceed button START */}
            <button onClick={handleProceedBtn}
             className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white    rounded-full w-full py-7 mt-4'>
                Proceed to Checkout
            </button>
            {/* proceed button END*/}



 
        </div>
            }
       </div>
    );
};

export default SelectedCart;