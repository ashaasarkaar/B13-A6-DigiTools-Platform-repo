import React, { useState } from 'react';

const Tools = ({cartCount, toggleCart, setToggleCart,active,setActive}) => {

    return (

        <div>

            {/* Tools Section START */}
            <div className='mt-20 text-center space-y-4'>

                <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

                <div className="inline-flex rounded-full border-3 border-[#F6F6F6] p-1">

                    <button onClick={()=> setActive('Products')} 
                    className={`rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out
                        ${  active === 'Products'
                            ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                            : 'text-black'
                        }
                    `}>
                        Products
                    </button>

                         <button onClick={()=> setActive('Cart')} 
                    className={`rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out
                        ${  active === 'Cart'
                            ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                            : 'text-black'
                        }
                    `}>
                        Cart ({cartCount})
                    </button>
                </div>

            </div>
            {/* Tools Section END */}

        </div>

    );
};

export default Tools;