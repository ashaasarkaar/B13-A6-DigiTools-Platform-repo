import React from 'react';
import { MdDelete } from 'react-icons/md';


const SelectedToggleCard = ({selectedToggleCard}) => {
    return (
        <div>
            
            {/* SELECTED CARD SECTION START */}
           <div className='flex justify-between items-center border-2 border-gray-400 rounded-2xl py-5 px-3 shadow-xl mb-4 '>

            {/* left side START */}
             <div className='flex gap-5 items-center'>

                {/* image START */}
                <div className='border-1 border-gray-500 inline-flex p-2 rounded-full'>
                    <img src={selectedToggleCard.icon} ></img>
                </div>
                 {/* image END */}

                {/* text content START */}
                <div>
                    <h2 className='font-bold text-xl'>{selectedToggleCard.name}</h2>
                    <p className='font-semibold text-gray-600'>${selectedToggleCard.price}</p>
                </div>
                 {/* text content END */}

             </div>
              {/* left side END */}

              {/* right side START */}
           
                 <button
              className='btn rounded-full'>
                <MdDelete color="red" ></MdDelete>
             </button>
           
             {/* right side END */}

           </div>
            {/* SELECTED CARD SECTION END */}
            
        </div>
    );
};

export default SelectedToggleCard;