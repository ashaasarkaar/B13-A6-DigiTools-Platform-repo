import React from 'react';
import SelectedToggleCard from './SelectedToggleCard';

const SelectedCart = ({toggleCart, setToggleCart}) => {
    return (
        <div  className='w-10/12 mx-auto border-1 border-gray-500 p-10 rounded-2xl shadow-2xl mt-10 mb-50'>
          {
            toggleCart.map((selectedToggleCard,index) => <SelectedToggleCard key={index} selectedToggleCard={selectedToggleCard}></SelectedToggleCard> )
          }
        </div>
    );
};

export default SelectedCart;