import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const Header = () => {
    return (
        <div className='mx-5 my-7'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to = '/home'>Home</Link></li>
        <li><Link to = '/about'>About</Link></li>
        <li><Link to = '/service'>Services</Link></li>
        <li><Link to = '/blog'>Blog</Link></li>
        <li><Link to = '/contact'>Contact</Link></li>
      </ul>
    </div>
    <Link to = '/'><img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-semibold">
      <li><Link to = '/home'>Home</Link></li>
      <li><Link to = '/about'>About</Link></li>
      <li><Link to = '/service'>Services</Link></li>
      <li><Link to = '/blog'>Blog</Link></li>
      <li><Link to = '/contact'>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
            
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <Link to = '/' className="btn bg-white hover:bg-[#FF3811] hover:text-white hover:border-none text-[#FF3811] border-[#FF3811]">Appointment</Link>
  </div>
</div>
        </div>
    );
};

export default Header;