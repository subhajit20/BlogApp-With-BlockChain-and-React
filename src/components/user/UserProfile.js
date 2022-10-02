import React from 'react';
import BlogGallery from './BlogGallery';


function UserProfile() {
  return (
    <div className=''>
      <div className='flex justify-center my-4'>
        <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
      </div>
      <div className='Username flex justify-center my-2'>
        <span className='font-semibold text-2xl'>User Name</span>
      </div>
      <div className='Account_id flex justify-center my-2'>
        <span className='font-semibold text-xl'>Account Id</span>
      </div>
      <div className='Edit flex justify-center my-2'>
        <button className="px-3 sm:px-5 py-1 sm:py-3 bg-sky-500 text-white rounded-3xl font-semibold text-sm sm:text-2xl hover:bg-sky-600 transition-all duration-300">Edit Profile <i className="fa-solid fa-arrow-right"></i></button>
      </div>

      <BlogGallery/>
    </div>
  )
}

export default UserProfile