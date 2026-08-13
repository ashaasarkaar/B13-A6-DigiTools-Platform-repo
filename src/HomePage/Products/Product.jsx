import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Product = ({cartProduct}) => {
    const{name, description, price, period, tag, category, features, icon} = cartProduct;
    const[addBtn, setAddBtn] = useState('Buy Now')
    return (
        <div>

            <div className='border-1 border-[#62738278] rounded-2xl px-4 py-5 shadow-lg'>

                {/* badge of tag START */}
                <div className='flex justify-end'>
                       <p className={`btn rounded-full
                       ${tag === 'best seller'
                        ? 'bg-[#FEF3C6] text-[#BB4D00]'
                        : tag === 'popular'
                        ? 'bg-[#E1E7FF] text-[#9514FA]'
                        : 'bg-[#DBFCE7] text-[#0A883E]'
                       }`}>{tag}</p>
                </div>
                {/* badge of tag START */}

                {/* icon START */}
                <div className='border-2 border-[#627382] rounded-full inline-flex p-2'>
                    <img src={icon}></img>
                </div>
                {/* icon END */}

                {/* Text Content START */}
                <div className='space-y-3'>
                    <h1 className='text-2xl text-[#101727] font-extrabold mt-2'>{name}</h1>
                    <p className='text-[#627382]'>{description}</p>
                    <p className='text-2xl text-[#101727] font-extrabold'>${price}<span className='text-[#627382] text-base'>/{period}</span></p>
                </div>
                {/* Text Content END */}

                {/* features START */}
                <div className='mt-3'>
                    
                    {
                        features.map(feature =><li className='flex items-center gap-2 list-style-none'><FaCheck color='green'></FaCheck>{feature}</li>)
                    }
                </div>
                {/* features END */}

                <button onClick={() =>setAddBtn('Add to Cart')}
                 className={`btn  rounded-full w-full text-white mt-3 py-6 font-bold
                ${addBtn === 'Buy Now'
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                    : 'bg-green-600'
                }`}>{addBtn}</button>
                
            </div>

        </div>
    );
};

export default Product;