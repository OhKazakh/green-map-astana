import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './components/Map';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>
);

reportWebVitals();