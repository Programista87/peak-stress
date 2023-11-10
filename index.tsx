import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css'; // Załaduj swoje globalne style

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);