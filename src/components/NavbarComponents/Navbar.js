import React,{useState,useContext} from 'react';
import SearchBar from './SearchBar';
import {WalletConnectionProvider} from '../../context/WalletConnectionContext'

function Navbar() {
    const [flag,setFlag] = useState(true);
    const [sideBar,setSidebar] = useState(true);
    const {ConnectWallet,Accountaddress} = useContext(WalletConnectionProvider)
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

    const openSideBar = () =>{
        if(sideBar){
            setSidebar(false)
        }else{
            setSidebar(true)
        }
    }
    const connectWallet = () =>{
        ConnectWallet()
    }
  return (
    <div className='Navbar p-3 px-6 h-[100px]  bg-slate-50 w-auto '>
        {
            !flag ? <div className='flex justify-start'>
                <span className='py-4 ml-2' onClick={closeSearchBar}><i className="fa-solid fa-backward"></i></span>
                <SearchBar/>
            </div> : <div className='flex justify-between'>
            <div className='flex justify-start'>
                <div className='py-1 sm:py-0 m-2'>
                    <img src="./images/logo.png" alt="_logo_" className='w-[40px] sm:w-[55px] ring-1 rounded-full h-[40px] sm:h-[55px] p-1'/>
                </div>
               <span className='py-5 ml-2 sm:py-5 sm:ml-2'><h4 className='font-bold text-sm sm:text-xl from-neutral-800'>BlogApp</h4></span> 
               <span className='py-2 ml-4 sm:block hidden'>
                <span className='relative left-[30px] sm:left[20px]'><i className="fa-solid fa-magnifying-glass text-slate-300"></i></span>
                    <input type="text" className='w-[360px] sm:w-[320px] md:w-[450px]
                    lg:w-[650px] outline-none  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 bg-transparent hover:bg-white transition-all duration-200 px-12 font-medium'
                     placeholder='Search Your Blogs'/>
              </span>
              </div>
                <div className={`cursor-pointer transition-all duration-700 absolute bg-slate-200 w-56 sm:w-64 ${!sideBar ? "left-[0rem]" : "left-[-20rem]" } h-full  m-0 top-0 bg-gradient-to-r from-blue-500 to-blue-600`}>
                    <div className='h-52 flex justify-center'>
                        <span className='absolute float-right left-[170px] sm:left-[200px] my-2 ' onClick={()=> setSidebar(true)}>
                            <i className="fa-solid fa-arrow-left text-2xl p-3 rounded-[100%] hover:bg-red-100 transition-all duration-500"></i>
                        </span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-16 sm:w-28 sm:h-14 my-12 ml-16 sm:ml-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        <div className='flex-col ml-6'>
                            
                        </div>
                        <div className='flex-col ml-6'>
                            <p className='font-bold sm:text-lg text-sm font-mono'>Your {Accountaddress === '' ? "Please Connect Your Wallet" : Accountaddress}</p>
                        </div>
                        </div>
                    </div>
                    <div className='p-2 py-16'>
                        <p className='hover:border-black hover:border-2 hover:bg-emerald-900 rounded-xl active:bg-emerald-900 transition-all duration-300 ' onClick={connectWallet}><i className="fa-solid fa-wallet font-bold text-2xl  p-5 rounded-full transition-all duration-200 text-white"></i></p>
                        <p className='hover:border-black hover:bg-emerald-900 hover:border-2 active:bg-emerald-900  rounded-xl transition-all duration-300'><i className="fa-solid fa-sun font-bold text-2xl text-white  p-5 rounded-full transition-all duration-200"></i></p>
                    </div>
                </div>
            <div className='cursor-pointer transition-all duration-150 flex'>
                <span onClick={openSearhbar} className="block sm:hidden"><i className="fa-solid fa-search font-bold text-xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200 "></i></span>
                <span onClick={openSideBar}><i className="fa-solid fa-bars font-bold text-xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200"></i></span>
            </div>
        </div>
        }
    </div>
  )
}

export default Navbar