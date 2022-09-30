import React,{useContext} from 'react';
import UserProfile from './UserProfile';
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';
import { Navigate} from 'react-router-dom';



function UserComponents() {
  const {IsConnected} = useContext(WalletConnectionProvider);
  return (
    <div>
        {
          IsConnected ? <UserProfile/> : <Navigate to="/" />
        }
    </div>
  )
}

export default UserComponents