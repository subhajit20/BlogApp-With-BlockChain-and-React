import React from 'react'

function PostUploaderComponent() {
  return (
    <div>
    <form>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="flex items-center py-2 px-2 sm:px-12  rounded-lg dark:bg-gray-700">

            <textarea id="chat" rows="1" className="block mx-4  p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-900 focus:border-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 transition-all duration-200 outline-none" placeholder="Your Title..."></textarea>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-12  rounded-lg dark:bg-gray-700">
            <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-900 focus:border-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 focus:h-[10rem] transition-all duration-200 outline-none" placeholder="Your message..."></textarea>
                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg aria-hidden="true" className="w-10 h-10 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                <span className="sr-only">Send message</span>
            </button>
        </div>
    </form>
    
    </div> 
  )
}

export default PostUploaderComponent