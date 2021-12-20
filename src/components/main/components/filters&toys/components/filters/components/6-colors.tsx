import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Colors({ toysData }: Props) {
  return (
    <div className="filters-colors-container">
      <h3 className="filters-title filters-colors-title">Цвет</h3>
      <div className="filters-colors-wrap">
        <input id="white" type="checkbox" className="filters-colors__checkbox white"></input>
        <label htmlFor="white" className="filters-colors__label white"></label>
        <input id="yelow" type="checkbox" className="filters-colors__checkbox yellow"></input>
        <label htmlFor="yelow" className="filters-colors__label yellow"></label>
        <input id="red" type="checkbox" className="filters-colors__checkbox red"></input>
        <label htmlFor="red" className="filters-colors__label red"></label>
        <input id="blue" type="checkbox" className="filters-colors__checkbox blue"></input>
        <label htmlFor="blue" className="filters-colors__label blue"></label>
        <input id="green" type="checkbox" className="filters-colors__checkbox green"></input>
        <label htmlFor="green" className="filters-colors__label green"></label>
      </div>
    </div>
  );
}
