import React from 'react'

function Signup() {
  return (
    <div className='relative flex justify-center'>
      <div className='w-[17rem] sm:w-[30rem] h-[50rem] absolute top-0 z-[-1]  flex justify-center '>
        <form className='my-[5rem]'>
          <div>
            <i className="fa-solid fa-user mr-4"></i>
            <input type="text" className='bg-[#f0fdf4] p-3 px-6 w-[12rem] sm:w-[27rem]  cursor-pointer my-2 outline-none rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] placeholder:text-black font-semibold' placeholder='Enter Username'/>   
          </div>
          <span className='ml-10 text-red-700 text-lg font-semibold p-1'>Error</span>
          <div>
            <i className="fa-solid fa-lock mr-4"></i>
            <input type="password" className='bg-[#f0fdf4] p-3 px-6 w-[12rem] sm:w-[27rem]  cursor-pointer my-2 outline-none rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] placeholder:text-black font-semibold' placeholder='Enter Password '/>   
          </div> 
          <span className='ml-10 text-red-700 text-lg font-semibold p-1'>Error</span> 
          <div>
            <i className="fa-solid fa-lock mr-4"></i>
            <input type="password" className='bg-[#f0fdf4] p-3 px-6 w-[12rem] sm:w-[27rem]  cursor-pointer my-2 outline-none rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] placeholder:text-black font-semibold' placeholder='Confirm Password '/>   
          </div>
          <span className='ml-10 text-red-700 text-lg font-semibold p-1'>Error</span>
          <div className='flex justify-center'>
            <button type="submit" className='p-2 px-6 cursor-pointer my-2 outline-none rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[inset_-12px_-8px_40px_#46464620] bg-emerald-300 hover:bg-emerald-800 hover:text-white transition-all hover:border-slate-900 hover:border-4 duration-300 text-sm sm:text-lg font-semibold'>Signup</button>   
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Signup