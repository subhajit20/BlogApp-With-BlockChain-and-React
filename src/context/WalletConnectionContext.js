import { createContext } from "react";
import UseWalletConnectHook from "../hooks/UseWalletConnectHook";

export const WalletConnectionProvider = createContext();

const WalletConnectionContext = ({children}) =>{
    const {accountaddress,loading,isConnected,connect} = UseWalletConnectHook();
    return <WalletConnectionProvider.Provider value={{Accountaddress:accountaddress,IsConnected:isConnected,Loading:loading,ConnectWallet:connect}}>
        {children}
    </WalletConnectionProvider.Provider>
}

export default WalletConnectionContext;