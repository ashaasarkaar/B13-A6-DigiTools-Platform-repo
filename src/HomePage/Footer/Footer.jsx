import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] p-30'>
                {/* Text START */}
                <div className='text-white grid grid-cols-1 text-center md:text-left md:grid-cols-5 gap-10 md:gap-20 mb-20'>

                    {/* 1st div digitools START */}
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-extrabold'>DigiTools</h1>
                        <p className='text-sm  text-[#627382]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                      {/* 1st div digitools END */}
                      
                      {/* 2nd div Product details START */}
                      <div className='space-y-3'>
                        <p className='font-medium text-xl'>Product</p>
                        <p className='text-sm  text-[#627382]'>Features</p>
                        <p className='text-sm  text-[#627382]'>Pricing</p>
                        <p className='text-sm  text-[#627382]'>Templates</p>
                        <p className='text-sm  text-[#627382]'>Integrations</p>
                      </div>
                      {/* 2nd div Product details END*/}

                      {/* 3rd div company details START */}
                      <div className='space-y-3'>
                          <p className='font-medium text-xl'>Company</p>
                        <p className='text-sm  text-[#627382]'>About</p>
                        <p className='text-sm  text-[#627382]'>Blog</p>
                        <p className='text-sm  text-[#627382]'>Careers</p>
                        <p className='text-sm  text-[#627382]'>Press</p>
                      </div>
                      {/* 3rd div company details START */}

                      {/* 4th div Resources details START */}
                      <div className='space-y-3'>
                          <p className='font-medium text-xl'>Resources</p>
                        <p className='text-sm  text-[#627382]'>Help Center</p>
                        <p className='text-sm  text-[#627382]'>Documentation</p>
                        <p className='text-sm  text-[#627382]'>Community</p>
                        <p className='text-sm  text-[#627382]'>Contact</p>
                      </div>
                      {/* 4th div Resources details END */}

                      {/* 5th div social media START */}
                      <div className='space-y-3'>
                        <p className='font-medium text-xl'>Social Links</p>

                        {/* media icons START */}
                        <div className='flex justify-center md:justify-start items-center  gap-3'>
                             <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                               <a href="https://www.instagram.com/"  target="_blank"> <RiInstagramFill color='#E4405F' size={20}/></a>
                            </div>

                            <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                               <a href="https://www.facebook.com/"  target="_blank"> <FaFacebook color='blue' size={20}/></a>
                            </div>

                             <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                              <a href="https://x.com/"  target="_blank"> <FaSquareXTwitter color='#000000' size={20} /></a>
                            </div>

                        </div>
                         {/* media icons START */}


                      </div>
                      {/* 5th div social media START */}

                </div>
                {/* Text END */}

                {/* divider START */}
                 <div className="divider before:bg-gray-300 after:bg-gray-300 before:h-px after:h-px"></div>
                {/* divider END */}

                {/* copyright START */}
                <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0  text-[#627382] text-sm'>
                    <div>
                        <p> &copy; 2026 Digitools. All rights reserved.</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>

                </div>

                {/* copyright END */}
                

            </div>
            
        </div>
    );
};

export default Footer;