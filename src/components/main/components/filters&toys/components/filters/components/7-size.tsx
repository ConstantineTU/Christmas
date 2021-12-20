import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Size({ toysData }: Props) {
  return (
    <div className="filters-size-container">
      <h3 className="filters-title filters-size-title">Размер</h3>
      <div className="filters-size-wrap">
        <input id="bigToys" type="checkbox" className="filters-size__checkbox bigToys"></input>
        <label htmlFor="bigToys" className="filters-size__label bigToys">
          Большой
        </label>
        <input id="midToys" type="checkbox" className="filters-size__checkbox midToys"></input>
        <label htmlFor="midToys" className="filters-size__label midToys">
          Средний
        </label>
        <input id="smallToys" type="checkbox" className="filters-size__checkbox smallToys"></input>
        <label htmlFor="smallToys" className="filters-size__label smallToys">
          Маленький
        </label>
      </div>
    </div>
  );
}
