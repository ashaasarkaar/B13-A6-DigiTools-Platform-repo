import React from 'react';


const SelectedToggleCard = ({selectedToggleCard}) => {
    return (
        <div>

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

             {/* <button
                onClick={()=>handleDeleteSelectedPlayer(selectedPlayer)}
              className='btn'>
                <MdDelete  color="red" ></MdDelete>
             </button> */}

           </div>
            
        </div>
    );
};

export default SelectedToggleCard;