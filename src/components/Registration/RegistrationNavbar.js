import React from 'react';
import {Link} from 'react-router-dom';

function RegistrationNavbar() {
  return (
    <div className='h-11 w-full '>
        <div className='flex justify-evenly p-2 sm:p-3 bg-[#ef4444] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <Link to="/signup" className='focus:bg-emerald-900 focus:text-white font-semibold text-base px-2 py-2 sm:text-xl sm:px-5 sm:py-3 bg-slate-200 cursor-pointer  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 '>Signup</Link>
            <Link to="/login" className='focus:bg-emerald-900 focus:text-white font-semibold text-base px-2 py-2 sm:text-xl sm:px-5 sm:py-3 bg-slate-200 cursor-pointer  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300'>Login</Link>
        </div>
    </div>
  )
}

export default RegistrationNavbar