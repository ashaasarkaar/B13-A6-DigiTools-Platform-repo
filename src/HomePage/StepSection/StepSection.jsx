import React from 'react';
import userIcon from '../../assets/products/user.png'
import packageProductImg from '../../assets/products/package.png'

const StepSection = () => {
    return (
        <div className='bg-[#F1F3F7] p-20 mb-20'>

            {/* Step Section START */}
            <div className='w-10/12 mx-auto'>

                {/* text Content START */}
                <div className='space-y-3 text-center'>
                    <h1 className='font-extrabold text-5xl'>Get Started in 3 Steps</h1>
                    <p className=' text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* text Content END */}

                {/* Cards Container START */}
                <div className='grid grid-cols-1 md:grid-cols-3 mt-7 gap-15'>

                    {/* 1st card Create Account START */}
                    <div className='bg-base-200 shadow-2xl py-4 px-5 rounded-xl'>

                        {/* Card Top Part Cut To get Different Padding START */}
                        {/* notification icon circle START */}
                        <div className='flex justify-end'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full inline-flex items-center justify-center w-10 h-10'>
                                <span className='text-white'>01</span>
                            </div>
                        </div>
                        {/* notification icon circle START */}
                        {/* Card Top Part Cut To get Different Padding START */}

                        {/* Padding wrapper div start to give different padding START */}
                        <div className='py-10'>

                            {/* User Icon START */}
                            <div className='flex justify-center mb-4'>
                                <div className='bg-[#e1e7ff] rounded-full p-3 inline-flex justify-center items-center'>
                                    <img src={userIcon} alt="User-Icon" />
                                </div>
                            </div>
                            {/* User Icon END */}

                            <div className='text-center space-y-3 py-2'>
                                <h3 className='font-bold text-2xl'>Create Account</h3>
                                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                            </div>

                        </div>
                        {/* Padding wrapper div start to give different padding START */}

                    </div>
                    {/* 1st card Create Account END */}

                    {/* 2nd card Choose Products START */}
                  <div className='bg-base-200 shadow-2xl py-4 px-5 rounded-xl'>

                        {/* Card Top Part Cut To get Different Padding START */}
                        {/* notification icon circle START */}
                        <div className='flex justify-end'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full inline-flex items-center justify-center w-10 h-10'>
                                <span className='text-white'>02</span>
                            </div>
                        </div>
                        {/* notification icon circle START */}
                        {/* Card Top Part Cut To get Different Padding START */}

                        {/* Padding wrapper div start to give different padding START */}
                        <div className='py-10'>

                            {/* User Icon START */}
                            <div className='flex justify-center mb-4'>
                                <div className='bg-[#e1e7ff] rounded-full p-3 inline-flex justify-center items-center'>
                                    <img src={packageProductImg} alt="Image Of Package Product" />
                                </div>
                            </div>
                            {/* User Icon END */}

                            <div className='text-center space-y-3 py-2'>
                                <h3 className='font-bold text-2xl'>Choose Products</h3>
                                <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                            </div>

                        </div>
                        {/* Padding wrapper div start to give different padding START */}

                    </div>
                    {/* 2nd card Choose Products END */}

                    {/* 3rd card start creating START */}
                   <div className='bg-base-200 shadow-2xl py-4 px-5 rounded-xl'>

                        {/* Card Top Part Cut To get Different Padding START */}
                        {/* notification icon circle START */}
                        <div className='flex justify-end'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full inline-flex items-center justify-center w-10 h-10'>
                                <span className='text-white'>03</span>
                            </div>
                        </div>
                        {/* notification icon circle START */}
                        {/* Card Top Part Cut To get Different Padding START */}

                        {/* Padding wrapper div start to give different padding START */}
                        <div className='py-10'>

                            {/* User Icon START */}
                            <div className='flex justify-center mb-4'>
                                <div className='bg-[#e1e7ff] rounded-full p-3 inline-flex justify-center items-center'>
                                    <img src={packageProductImg} alt="Image Of Package Product" />
                                </div>
                            </div>
                            {/* User Icon END */}

                            <div className='text-center space-y-3 py-2'>
                                <h3 className='font-bold text-2xl'>Start Creating</h3>
                                <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                            </div>

                        </div>
                        {/* Padding wrapper div start to give different padding START */}

                    </div>
                    {/* 3rd card start creating  END */}

                </div>
                {/* Cards Container END */}



            </div>
            {/* Step Section END */}

        </div>
    );
};

export default StepSection;