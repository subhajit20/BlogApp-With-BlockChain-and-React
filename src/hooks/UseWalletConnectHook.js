import Web3 from 'web3';
import { useState } from "react";

const UseWalletConnectHook = () =>{
    const [accountaddress,setAccoundeAddress] = useState('');

    async function connect(){
        if(window.ethereum === undefined){
            alert("You don't have metamask account");
        }else{
            const web3 = new Web3(Web3.givenProvider);
    
            const account = await web3.eth.requestAccounts();
            if(account.length > 0){
                setAccoundeAddress(account[0]);
            }
        }
    } 
    
    return {accountaddress,connect}
}

export default UseWalletConnectHook;