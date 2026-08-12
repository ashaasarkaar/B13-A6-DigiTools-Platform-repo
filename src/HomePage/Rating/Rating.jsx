import React from 'react';

const Rating = () => {
    return (
       <div className='mt-5 md:mt-0'>

             <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10'>

            <div className='grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white w-10/12 mx-auto gap-10 md:gap-0'>

                {/* Active User 1st div START */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                        <p className='text-white'>Active Users</p>

                    </div>
                {/* Active User 1st div END */}

             
                 {/* Premium Tools 2nd div START */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                        <p className='text-white'>Premium Tools</p>
                    </div>
                {/* Premium Tools 2nd div END */}

            
                 {/* Rating 3rd div START */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                        <p className='text-white'>Rating</p>
                    </div>
                {/* Rating 3rd div END */}

            </div>
        </div>

       </div>
    );
};

export default Rating;