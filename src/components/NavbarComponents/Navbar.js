import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom'
import SideBar from './SideBar';
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';

function Navbar() {
    const [flag,setFlag] = useState(true);
    const [sideBar,setSidebar] = useState(true);
    const {Accountaddress} = useContext(WalletConnectionProvider);


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
  return (
    <div className='Navbar p-1 px-2  sm:p-3 sm:px-6 h-[70px] sm:h-[100px]  bg-slate-50 w-full sm:w-auto '>
        {
            !flag ? <div className='flex justify-start'>
                <span className='py-4 ml-2' onClick={closeSearchBar}><i className="fa-solid fa-backward"></i></span>
            </div> : <div className='flex justify-between'>
            <div className='flex justify-start relative '>
                <div className='py-1 sm:py-0 m-2 w-14 sm:w-14 '>
                    <img src="./images/logo.png" alt="_logo_" className='w-[40px] sm:w-[55px] ring-1 rounded-full h-[40px] sm:h-[55px] p-1'/>
                </div>
               <span className='py-5 ml-2 sm:py-5 sm:ml-2'><h4 className='font-bold text-sm sm:text-xl from-neutral-800 relative'><Link to="/home">BlogApp</Link></h4></span> 
               <span className='py-2 ml-4 sm:block hidden'>
              </span>
              </div>
                <div className={`cursor-pointer transition-all duration-700 absolute bg-slate-200 w-56 sm:w-64 ${!sideBar ? "left-[0rem]" : "left-[-20rem]" } h-full  m-0 top-0 bg-gradient-to-r `}>
                    <div className='h-52 flex justify-center'>
                        <span className='absolute float-right left-[170px] sm:left-[200px] my-2 ' onClick={()=> setSidebar(true)}>
                            <i className="fa-solid fa-arrow-left text-2xl p-3 rounded-[100%] hover:bg-red-100 transition-all duration-500"></i>
                        </span>
                        <div>
                            <SideBar accountaddress={Accountaddress}/>
                        <div className='flex-col ml-6'>
                            
                        </div>
                        <div className='flex-col ml-6'>
                        </div>
                        </div>
                    </div>
                </div>
            <div className='cursor-pointer transition-all duration-150 flex'>
                <span onClick={openSideBar}><i className="fa-solid fa-bars font-bold text-xl hover:bg-slate-200 p-5 rounded-full transition-all duration-200"></i></span>
            </div>
        </div>
        }
    </div>
  )
}

export default Navbar