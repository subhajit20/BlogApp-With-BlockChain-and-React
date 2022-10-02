import React,{useContext} from 'react';
import Home from './Home';
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';
import { Navigate} from 'react-router-dom';

function HomeInterface() {
  const {IsConnected} = useContext(WalletConnectionProvider);

  return (
    <div>
        {
          IsConnected ? <Home /> : <Navigate to="/" />
        }
    </div>
  )
}

export default HomeInterface