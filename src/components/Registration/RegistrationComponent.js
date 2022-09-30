import React,{useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import RegistrationNavbar from './RegistrationNavbar';
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';

function RegistrationComponent() {
  const {IsConnected} = useContext(WalletConnectionProvider);

  // useEffect(()=>{

  // })
  return (
    <div>
      {
        IsConnected ? <>
        <div className='z-10'>
          <RegistrationNavbar/>
        </div>
        <Outlet/>
      </> : <Navigate to="/" />
      }
      
    </div>
  )
}

export default RegistrationComponent