
import React from 'react';

const NavBar = () => {

  return (

    <div className='bg-base-100 shadow-sm'>

      <div className="navbar w-full md:w-11/12 lg:w-10/12 mx-auto">

      {/* NavBar start Section START */}
        <div className="navbar-start">

          {/* NavBar DropDown Hidden Menu Section START */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='group'>
                <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                  <span className='group-hover:text-white'>Products</span>
                </a></li>

              <li className='group'>
                <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                  <span className='group-hover:text-white'>Features</span>
                </a></li>

              <li className='group'>
                <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                  <span className='group-hover:text-white'>Pricing</span>
                </a></li>

              <li className='group'>
                <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                  <span className='group-hover:text-white'>Testimonials</span>
                </a></li>

              <li className='group'>
                <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                  <span className='group-hover:text-white'>FAQ</span>
                </a></li>

            </ul>
          </div>
          {/* NavBar DropDown Hidden Menu Section END */}

          {/* NavBar Logo DigiTools START */}
          <div className=" items-center navbar-start ">
            <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">DigiTools</a>
          </div>
           {/* NavBar Logo DigiTools END */}

        </div>
       {/* NavBar start Section END */}

        {/* NavBar Center Menu START */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            <li className='group'>
              <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <span className='group-hover:text-white'>Products</span>
              </a></li>

            <li className='group'>
              <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <span className='group-hover:text-white'>Features</span>
              </a></li>

            <li className='group'>
              <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <span className='group-hover:text-white'>Pricing</span>
              </a></li>

            <li className='group'>
              <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <span className='group-hover:text-white'>Testimonials</span>
              </a></li>

            <li className='group'>
              <a href="" className=' group-hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <span className='group-hover:text-white'>FAQ</span>
              </a></li>

          </ul>
        </div>
        {/* NavBar Center Menu END */}

        {/* NavBar End section START */}
        <div className="navbar-end space-x-5 flex flex-wrap">

          <div className="">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <a href=''><p className=''>Login</p></a>
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer">
            Get Started
          </button>
        </div>
         {/* NavBar End section END */}



      </div>
    </div>

  );
};

export default NavBar;

