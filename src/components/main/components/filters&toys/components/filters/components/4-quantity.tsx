import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import QuantityTwoThumbs from './quantity-range';

type Props = {
  toysData: object;
  quantityFilterMin: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  quantityFilterMax: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
};

export default function Quantity(props: Props) {
  return (
    <div className="filters-quantity-container">
      <h3 className="filters-title filters-quantity-title">Количество экземпляров</h3>
      <QuantityTwoThumbs
        rtl={false}
        quantityFilterMin={props.quantityFilterMin}
        quantityFilterMax={props.quantityFilterMax}
      />
    </div>
  );
}
