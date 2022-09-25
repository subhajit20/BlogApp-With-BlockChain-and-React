import Web3 from 'web3';
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const UseWalletConnectHook = () =>{
    const [accountaddress,setAccoundeAddress] = useState('');
    const [loading,setLoading] = useState(false);
    const [isConnected,setIsConnected] = useState(false);
    const navigate = useNavigate()

    async function connect(){
        setLoading(true);
        if(window.ethereum === undefined){
            alert("You don't have metamask account");
        }else{
            const web3 = new Web3(Web3.givenProvider);
            
            const account = await web3.eth.requestAccounts();
            if(account.length > 0){
                setTimeout(()=>{
                    setLoading(false);
                    setIsConnected(true)
                    setAccoundeAddress(account[0])
                },2000)
            }else{
                setTimeout(()=>{
                    setLoading(false)
                    setIsConnected(false)
                    setAccoundeAddress('')
                },2000)
            }
        }
    }

    const checkConnection = () =>{
      if(isConnected){
        navigate('/login')
      }else if(!isConnected){
        navigate('/');
      }
    }
    useEffect(()=>{
        checkConnection();
    
        return ()=>{
          checkConnection();
        }
      },[isConnected])
    
    return {accountaddress,loading,isConnected,connect}
}

export default UseWalletConnectHook;