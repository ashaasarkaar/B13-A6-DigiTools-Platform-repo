import React from 'react';

const WorkFlow = () => {
    return (
        <div>
            {/* workflow section START */}
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-40 p-30'>

                {/* text START */}
                <div className='text-center space-y-5'>
                    <h1 className='font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

                    {/* button START */}
                    <div className='flex justify-center items-center gap-4'>
                        <button className='btn rounded-full p-6'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Explore Products</span></button>
                        <button className='btn btn-outline py-6 px-10 rounded-full border-1 border-white text-white hover:text-black'>View Pricing</button>
                    </div>
                     {/* button END */}
                     
                </div>
                 {/* text END */}

                 <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-5 text-white'>
                    <p>14-day free trial</p>
                    <div className='w-1 h-1 bg-white rounded-full'></div>
                    <p> No credit card required</p>
                      <div className='w-1 h-1 bg-white rounded-full'></div>
                    <p> Cancel anytime</p>
                 </div>



            </div>
             {/* workflow section END */}
        </div>
    );
};

export default WorkFlow;