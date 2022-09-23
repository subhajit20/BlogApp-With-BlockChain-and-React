import { createContext } from "react";
import UseWalletConnectHook from "../hooks/UseWalletConnectHook";

export const WalletConnectionProvider = createContext();

const WalletConnectionContext = ({children}) =>{
    const {accountaddress,connect} = UseWalletConnectHook();
    return <WalletConnectionProvider.Provider value={{Accountaddress:accountaddress,ConnectWallet:connect}}>
        {children}
    </WalletConnectionProvider.Provider>
}

export default WalletConnectionContext;