const selfTest = () => {
  console.group('%cCross-check: Christmas-task Part 2, ConstantineTU', 'color: red');
  console.log('%cНе выполненные пункты: Все пункты выполнены', 'color: red');
  console.log(
    `Score 200 / 200

	Выполненные пункты: Все пункты выполены.
Своя собственная фича - cчитаю, что я сделал качественно оформленное приложение, визуально красивое, я очень много времени потратил на вёрстку, помимо этого реализован хороший адаптив под телефоны вплоть до 320px. Добавлено: при сбросе все игрушки, которые находятся на ёлке переходят в свои контейнеры. Добавлено сохранение активной гирлянды в localStorage`
  );
  console.log('	%cИтого 210 баллов из 200', 'color: green');

  console.log(
    '%cПрошу Вас добавить мою работу в лучшие, если она вам понравилась. Мой дискорд - https://discordapp.com/users/414360051101466624',
    'color: blue'
  );
  console.log('%cСпасибо за проверку, с Наступающим Вас новым годом и успехов!', 'color: green');

  console.groupEnd();
};
export default selfTest;
