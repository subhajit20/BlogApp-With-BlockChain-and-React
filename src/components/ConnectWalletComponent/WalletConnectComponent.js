import React,{useContext} from 'react'
import {WalletConnectionProvider} from '../../context/WalletConnectionContext';
import {useNavigate} from 'react-router-dom';

function WalletConnectComponent() {
    const {ConnectWallet,Loading,IsConnected} = useContext(WalletConnectionProvider);
    const navigate = useNavigate();

    const connectMyWallet = () =>{
        ConnectWallet();

        if(IsConnected === true){
          navigate("/login");
        }
    } 


  return (
    <div className='bg-purple-800 h-screen flex justify-center justify-items-center w-full sm:w-full'>
        <div>
            <button className='p-2 sm:p-3 px-3 sm:px-6 bg-green-500 rounded-xl text-xs sm:text-2xl w-36 sm:w-auto font-semibold my-[15rem] hover:bg-green-700 hover:text-white transition-all duration-300' onClick={connectMyWallet}>{IsConnected ? <i className="fa-sharp fa-solid fa-link"></i> : <i className="fa-solid fa-wallet" ></i> } {Loading ? " Loading" : IsConnected ? <span>Connected</span> : <span> Connect Your Metamask Wallet</span>}</button>
        </div>
    </div>
  )
}

export default WalletConnectComponent