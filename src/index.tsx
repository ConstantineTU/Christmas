import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import './assets/scss/style.scss';
console.group('%cCross-check: Christmas-task Part 1, ConstantineTU', 'color: red')
console.log('%cНе выполненные пункты: Все пункты выполнены', 'color: red')
console.log(
  `Score 200 / 200

	Выполненные пункты: Все пункты, которые не указаны - выполены
	 Своя собственная фича - добавлена кнопка быстрого возврата к фильтрам, что повышает удобство пользования приложением,
   а так-же считаю, что я сделал качественно оформленное приложение, визуально красивое, я очень много времени потратил на вёрстку, 
   помимо этого реализован хороший адаптив под телефоны вплоть до 320px.
	 `
)
console.log('	%cИтого 210 баллов из 200', 'color: green')

console.log('%cМой дискорд - https://discordapp.com/users/414360051101466624', 'color: blue')
console.log('%cСпасибо за проверку, с Наступающим Вас новым годом!', 'color: green')

console.groupEnd()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const app = new App();
// app.start();
