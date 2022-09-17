import React from 'react'

function SearchBar() {
  return (
    <div className="flex justify-start ml-8">
        <input type="text" className='w-[240px] sm:w-[600px]  outline-none  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 bg-transparent hover:bg-white transition-all duration-200 px-12 font-medium' 
    placeholder='Search Your Favorite Person'/></div>
  )
}

export default SearchBar