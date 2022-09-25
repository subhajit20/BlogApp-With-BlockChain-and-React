import React,{useContext} from 'react'
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';
// import {useNavigate} from 'react-router-dom';

function WalletConnectComponent() {
    const {ConnectWallet,Loading,IsConnected} = useContext(WalletConnectionProvider);
    // const navigate = useNavigate();

    const connectMyWallet = () =>{
        ConnectWallet();
    }

  return (
    <div className='bg-purple-800 h-screen flex justify-center justify-items-center sm:w-full'>
        <div>
            <button className='p-3 px-3 sm:px-6 bg-green-500 rounded-2xl text-xl sm:text-2xl font-semibold my-[15rem] hover:bg-green-700 hover:text-white transition-all duration-300' onClick={connectMyWallet}>{IsConnected ? <i className="fa-sharp fa-solid fa-link"></i> : <i className="fa-solid fa-wallet" ></i> } {Loading ? " Loading" : IsConnected ? "Connected" : "Connect Wallet"}</button>
        </div>
    </div>
  )
}

export default WalletConnectComponent