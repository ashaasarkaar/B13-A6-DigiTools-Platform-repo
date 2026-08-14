import React, { use } from 'react';
import Product from './Product';
import SelectedCart from '../Cart/SelectedCart';

const Products = ({ cartDataPromise, cartCount, setCartCount, toggleCart, setToggleCart,active}) => {
    const cartDataRes = use(cartDataPromise)
    const cartData = cartDataRes.data;
    // console.log(cartData)
    return (
        <div>

           
            {
                active === 'Products'
                    ? <div className='mt-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-40'>
                {
                    cartData.map(cartProduct => <Product key={cartProduct.id} toggleCart={toggleCart} setToggleCart={setToggleCart} cartCount={cartCount} setCartCount={setCartCount} cartProduct={cartProduct}></Product>)
                }
            </div>

            : <SelectedCart toggleCart={toggleCart} setToggleCart={setToggleCart}></SelectedCart>


                
            }

        </div>
    );
};

export default Products;