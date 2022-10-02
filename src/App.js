import './App.css';
import {Routes,Route} from 'react-router-dom';
import WalletConnectComponent from './components/ConnectWalletComponent/WalletConnectComponent'
import Main from '././components/MainComponent/Main';
import RegistrationComponent from './components/Registration/RegistrationComponent';
import Login from './components/Registration/Login';
import Signup from './components/Registration/Signup';
import UserProfile from './components/user/UserProfile';
import UserComponents from './components/user/UserComponents';
import HomeInterface from './components/HomeComponent/HomeInterface';
import Home from './components/HomeComponent/Home';

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
          <Route element={<UserComponents/>}>
              <Route path="/userprofile" element={<UserProfile/>}/> 
          </Route>
          <Route element={<HomeInterface/>}>
              <Route path="/home" element={<Home/>}/> 
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
