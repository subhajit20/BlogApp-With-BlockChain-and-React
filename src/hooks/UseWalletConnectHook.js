import Web3 from 'web3';
import { useState } from "react";


const UseWalletConnectHook = () =>{
    const [accountaddress,setAccoundeAddress] = useState('');
    const [loading,setLoading] = useState(false);
    const [isConnected,setIsConnected] = useState(false);

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
                },1000)

                return true;
            }else{
                setTimeout(()=>{
                    setLoading(false)
                    setIsConnected(false)
                    setAccoundeAddress('')
                },1000)

                return false;
            }
        }
    }

    
    return {accountaddress,loading,isConnected,connect}
}

export default UseWalletConnectHook;