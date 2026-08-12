import React from 'react';
import bannerImage from '../../assets/products/banner.png'
import { FaRegDotCircle } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
       <div>

            {/* Banner Section START */}
            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-15'>

                {/* left side Text Content START */}
                <div className='w-full md:w-1/2 text-center md:text-left space-y-5'>

                    {/*dot circle badge design START */}
                    <div className=' bg-[#a197ed] rounded-full py-2 px-4 inline-block'>

                      <div className='flex items-center gap-2 '>
                        
                        <FaRegDotCircle className='text-[#9514FA]'></FaRegDotCircle>
                        <p className='text-[#9514FA] font-medium'>New: AI-Powered Tools Available</p>

                      </div>

                    </div>
                    {/*dot circle badge design END */}

                    <h1 className='text-4xl font-extrabold md:text-4xl lg:text-6xl text-[#101727]'>Supercharge Your <br />
                        Digital Workflow</h1> 
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in
                        one place. Start creating faster today. <br /> Explore Products
                    </p>



                    {/* Two buttons section START */}
                    <div className='flex gap-2 justify-center items-center md:justify-start'>
                        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer text-white">
                            Explore Products
                        </button>

                        <button className="btn btn-primary btn-outline  rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-transparent bg-clip-text cursor-pointer">
                            <CiPlay1 className='text-[#9514FA]'></CiPlay1>
                            Watch Demo
                        </button>
                    </div>
                     {/*Two buttons section END */}

                </div>
                {/* left side Text Content START */}


                {/* Right side Banner Image START */}
                <div className='w-full mb-10 md:w-1/2 flex justify-end'>
                    <img src={bannerImage} alt="banner-image" />
                </div>
               {/* Right side Banner Image END */}

            </div>
            {/* Banner Section END */}

        </div>
    );
};

export default Banner;