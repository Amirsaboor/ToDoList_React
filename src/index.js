import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/global-style.css"
import "../src/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

