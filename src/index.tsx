import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import './assets/scss/style.scss';
// alert(`Добрый день, в связи с очень большой нагрузкой перед праздниками я не успел сделать задание до конца, и прошу Вас
// проверить меня в четверг вечером, к этому моменту я постараюсь выполнить все пункты.`)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const app = new App();
// app.start();
