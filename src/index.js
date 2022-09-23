import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WalletConnectionContext from './context/WalletConnectionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WalletConnectionContext>
      <App/>
    </WalletConnectionContext>
);
