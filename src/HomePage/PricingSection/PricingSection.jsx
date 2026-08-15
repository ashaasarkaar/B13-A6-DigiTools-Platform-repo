import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
    return (
        <div>

            <div className='w-10/12 mx-auto mb-20'>

                {/* text content section START */}
                <div className='text-center space-y-3'>
                    <h1 className='font-extrabold text-5xl'>Simple, Transparent Pricing</h1>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                {/* text content section START */}

                {/* Cards Container START */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>

                    {/* 1st card Starter START */}
                    <div className='bg-[#F2F2F2] rounded-2xl p-10 space-y-4'>

                        <div className='space-y-1'>
                            <h3 className='font-bold text-2xl'>Starter</h3>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>

                        <p className='font-bold text-4xl mt-5 mb-5'>$0<span className='text-[#627382] text-base'>/Month</span></p>

                            {/* features START */}
                        <div>
                           <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p  className='text-[#627382]'>Access to 10 free tools</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Basic templates</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Community support</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>1 project per month</p>
                           </div>
                        </div>

                          {/* features END */}

                          <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full p-3 text-white'>Get Started Free</button>

                    </div>
                    {/* 1st card Starter END */}

                       {/* 2nd card Starter START */}
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-10 space-y-4 text-white relative md:translate-y-5 md:shadow-[0_25px_50px_rgba(147,20,250,0.45)] hover:-translate-y-5 transition-all duration-300'>

                        <button className='text-[#BB4D00] bg-[#FEF3C6] rounded-full px-2 py-2 absolute -top-5 left-1/2 -translate-x-1/2'>Most Popular</button>

                        <div className='space-y-1'>
                            <h3 className='font-bold text-2xl'>Pro</h3>
                            <p className=''>Best for professionals</p>
                        </div>

                        <p className='font-bold text-4xl mt-5 mb-5'>$29<span className=' text-base'>/Month</span></p>

                            {/* features START */}
                        <div>
                           <div className='flex items-center gap-2'>
                            <FaCheck color='white' />
                             <p>Access to all premium tools</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='white' />
                             <p>Unlimited templates</p>
                           </div>
                            <div className='flex items-center gap-2'>
                           <FaCheck color='white' />
                             <p>Priority support</p>
                           </div>
                            <div className='flex items-center gap-2'>
                           <FaCheck color='white' />
                             <p>Unlimited projects</p>
                           </div>
                            <div className='flex items-center gap-2'>
                           <FaCheck color='white' />
                             <p>Cloud sync</p>
                           </div>
                            <div className='flex items-center gap-2'>
                           <FaCheck color='white' />
                             <p>Advanced analytics</p>
                           </div>
                        </div>

                          {/* features END */}

                          <button className='bg-white rounded-full w-full p-3 text-[#9514FA]'>Start Pro Trial</button>

                    </div>
                    {/* 2nd card Starter END */}

                      {/* 3rd card Starter START */}
                    <div className='bg-[#F2F2F2] rounded-2xl p-10 space-y-4'>

                        <div className='space-y-1'>
                            <h3 className='font-bold text-2xl'>Enterprise</h3>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>

                        <p className='font-bold text-4xl mt-5 mb-5'>$99<span className='text-[#627382] text-base'>/Month</span></p>

                            {/* features START */}
                        <div>
                           <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Everything in Pro</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Team collaboration</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Custom integrations</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Dedicated support</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>SLA guarantee</p>
                           </div>
                            <div className='flex items-center gap-2'>
                            <FaCheck color='green' />
                             <p className='text-[#627382]'>Custom branding</p>
                           </div>
                        </div>

                          {/* features END */}

                          <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full p-3 text-white'>Contact Sales</button>

                    </div>
                    {/* 3rd card Starter END */}

                </div>
                {/* Cards Container END */}

            </div>

        </div>
    );
};

export default PricingSection;