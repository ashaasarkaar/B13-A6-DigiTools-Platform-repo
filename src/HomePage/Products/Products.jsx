import React, { use } from 'react';
import Product from './Product';

const Products = ({ cartDataPromise, cartCount, setCartCount }) => {
    const cartDataRes = use(cartDataPromise)
    const cartData = cartDataRes.data;
    // console.log(cartData)
    return (
        <div>

            <div className='mt-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-40'>
                {
                    cartData.map(cartProduct => <Product key={cartProduct.id} cartCount={cartCount} setCartCount={setCartCount} cartProduct={cartProduct}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;