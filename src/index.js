import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WalletConnectionContext from './context/WalletConnectionContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WalletConnectionContext>
      <App/>
    </WalletConnectionContext>
  </BrowserRouter>
);
