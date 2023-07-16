import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { APIProvider } from '@mantine/core';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode >
    <APIProvider baseUrl="https://verdiaarul.github.io/frontend-dashboard-app/">

      <App />
    </APIProvider>
  </React.StrictMode>
);


reportWebVitals();
