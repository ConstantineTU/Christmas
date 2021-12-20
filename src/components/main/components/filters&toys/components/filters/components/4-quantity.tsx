import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Quantity({ toysData }: Props) {
  return (
    <div className="filters-quantity-container">
      <h3 className="filters-title filters-quantity-title">Количество экземпляров</h3>
      <div>
        <input
          min="0"
          max="12"
          step="1"
          className="filters-quantity-range"
          type="range"
          name="quantityRange"
          id="quantityRange"
        />
      </div>
      <div className="filters-quantity-count">
        <div>0</div>
        <div>12</div>
      </div>
    </div>
  );
}
