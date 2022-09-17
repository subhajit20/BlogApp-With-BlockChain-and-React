import React,{useState} from 'react';
import SearchBar from './NavbarComponents/SearchBar';

function Navbar() {
    const [flag,setFlag] = useState(true);
    const openSearhbar = () =>{
        if(flag){
            setFlag(false)
        }
    }
    const closeSearchBar = () =>{
        if(!flag){
            setFlag(true)
        }
    }
  return (
    <div className='Navbar p-3 px-6 h-[100px]  bg-slate-50 w-auto'>
        {
            !flag ? <div className='flex justify-start'>
                <span className='py-4 ml-2' onClick={closeSearchBar}><i className="fa-solid fa-backward"></i></span>
                <SearchBar/>
            </div> : <div className='flex justify-between'>
            <div className='flex justify-start'>
                <div className='py-1 sm:py-0 m-2'>
                    <img src="./images/logo.png" alt="_logo_" className='w-[40px] sm:w-[55px] ring-1 rounded-full h-[40px] sm:h-[55px] p-1'/>
                </div>
               <span className='py-5 ml-2 sm:py-5 sm:ml-2'><h4 className='font-bold text-sm sm:text-xl'>BlogApp</h4></span> 
               <span className='py-2 ml-4 sm:block hidden'>
                <span className='relative left-[30px] sm:left[20px]'><i className="fa-solid fa-magnifying-glass text-slate-300"></i></span>
                    <input type="text" className='w-[360px] sm:w-[320px] md:w-[450px]
                    lg:w-[650px] outline-none  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 bg-transparent hover:bg-white transition-all duration-200 px-12 font-medium'
                     placeholder='Search Your Blogs'/>
              </span>
              </div>
            <div className='cursor-pointer transition-all duration-150 lg:block hidden'>
                <span ><i className="fa-solid fa-user font-bold text-2xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200"></i></span>
                <span><i className="fa-solid fa-wallet font-bold text-2xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200"></i></span>
            </div>
            <div className='cursor-pointer transition-all duration-150 flex lg:hidden'>
                <span onClick={openSearhbar} className="block sm:hidden"><i className="fa-solid fa-search font-bold text-xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200 "></i></span>
                <span><i className="fa-solid fa-bars font-bold text-xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200"></i></span>
            </div>
        </div>
        }
    </div>
  )
}

export default Navbar