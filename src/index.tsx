import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import selfTest from './self-test';
import favicon from './assets/favicon.png';
import './assets/scss/style.scss';

const addFavicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]') as HTMLLinkElement;
addFavicon.setAttribute('href', String(favicon));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
selfTest();
