import React from 'react'

function SearchBar() {
  return (
    <div className="flex justify-center ml-1 sm:ml-5">
        <input type="text" className='w-[260px] sm:w-[550px]  outline-none  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-0 sm:p-3 bg-transparent hover:bg-white transition-all duration-200 px-8 sm:px-12 font-medium' 
    placeholder='Search Your Favorite Person'/>
    </div>
  )
}

export default SearchBar