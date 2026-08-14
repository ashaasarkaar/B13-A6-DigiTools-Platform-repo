import React from 'react';
import { BsCartXFill } from 'react-icons/bs';

const SelectedCartEmpty = () => {
    return (
        <div className='w-10/12 mx-auto border-1 border-gray-500 p-30 rounded-2xl shadow-2xl mt-10 mb-50'>
           <div className='text-center space-y-3'>

          <div className='flex items-center gap-2 justify-center'>
            <h1 className='font-extrabold text-4xl' >Your Cart is Empty </h1>
             <BsCartXFill size={50} color='purple'/>
          </div>

            <h2 className='font-bold text-2xl text-gray-600'>Looks like you haven't added anything to your cart yet.</h2>
            <h3 className='font-bold text-xl text-gray-800'>Start shopping and add your favorite products!</h3>
           </div>
        </div>
    );
};

export default SelectedCartEmpty;