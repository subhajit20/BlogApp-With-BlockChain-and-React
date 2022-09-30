import React from 'react';
import {Link} from 'react-router-dom';

function SideBar({accountaddress}) {
  return (
    <div className='relative py-3 flex justify-center mt-4'>
      <div id='container flex'>
        <div className='accountimage mt-2 mb-4'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-16 ml-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>

          <p className='accountaddres text-xs  relative right-2 bg-slate-300 py-1 px-6 rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] font-semibold flex justify-center'> { accountaddress.length > 0 ? `${accountaddress.substr(0,5)}...${accountaddress.substr(38,)}` : "Coonect Your Wallet" }</p> 

        </div>
        <div className='username mt-5'>
          <p className='myusername text-xs relative right-2 bg-slate-300 py-1 px-6 rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] font-semibold flex justify-center'>Subhajit Ghosh</p>
        </div>
          <Link to="/userprofile">Profile</Link>
          <Link to="/login">Profile</Link>
        <div>

        </div>
     </div>

    </div>
  )
}

export default SideBar