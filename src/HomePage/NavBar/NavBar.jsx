import React from 'react';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>

            <div className="navbar w-10/12 mx-auto">

  {/* left side Text START */}
             <div className=" items-center navbar-start">
    <a  className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">DigiTools</a>
  </div>
  {/* left side Text END */}

  {/* Middle Part MenuBar START */}
  <div className='flex items-center gap-5 justify-center navbar-center'>
    <p>Products</p>
    <p>Features</p>
    <p>Pricing</p>
    <p>Testimonials</p>
    <p>FAQ</p>
  </div>
  {/* Middle Part MenuBar END */}

   

  {/* Right Side Two Buttons START */}
  <div className='flex items-center space-x-5 navbar-end'>
    {/* Right Side Cart Notify-icon START */}
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
  {/* Right Side Cart Notify-icon END */}
 
    <a href=''><p className=''>Login</p></a>
  <button className="px-4 py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer">
  Get Started
</button>
  </div>
  {/* Right Side Two Buttons END */}
   
</div>
        

        </div>
    );
};

export default NavBar;