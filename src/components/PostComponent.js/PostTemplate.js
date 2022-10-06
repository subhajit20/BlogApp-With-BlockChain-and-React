import React from 'react'
import { Link } from 'react-router-dom'

function PostTemplate() {
  return (
    <div className='px-10 sm:px-0 my-5 flex justify-center flex-wrap'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex justify-between rounded-full px-0 sm:px-3 py-1 text-sm font-semibold mr-2 mb-2">
            <Link to="/userprofile"><img className="w-10 h-10 rounded-full mr-4" src="./images/logo.png" alt="Avatar of Jonathan Reinink" /></Link>
            <div className="text-sm">
                <Link to="/userprofile"><p className="text-gray-900 leading-none">Username</p></Link>
                <p className="text-gray-600">Aug 18</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 sm:py-2 px-1 sm:px-4 rounded-lg sm:rounded-full">
            Delete
            </button>
        </div>
        <img className="w-full" src="./images/logo.png" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="sm:px-6 px-1 py-2 sm:py-4 flex justify-between">
            <p className='cursor-pointer hover:bg-slate-300 transition-all duration-300 py-1 px-3 rounded-full'>Like</p>
            <p className='cursor-pointer hover:bg-slate-300 transition-all duration-300 py-1 px-3 rounded-full'>Comment</p>
            <p className='cursor-pointer hover:bg-slate-300 transition-all duration-300 py-1 px-3 rounded-full'>Share</p>
        </div>
        </div>
    </div>
  )
}

export default PostTemplate