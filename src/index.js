import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import './index.scss';

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);