import './App.css';
import {Routes,Route} from 'react-router-dom';
import WalletConnectComponent from './components/ConnectWalletComponent/WalletConnectComponent'
import Main from '././components/MainComponent/Main';
import RegistrationComponent from './components/Registration/RegistrationComponent';
import Login from './components/Registration/Login';
import Signup from './components/Registration/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>}>
          <Route path="/" element={<WalletConnectComponent/>}/>
          <Route element={<RegistrationComponent/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
