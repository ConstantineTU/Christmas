import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import QuantityTwoThumbs from './quantity-range';

type Props = {
  toysData: object;
  quantityValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
};

export default function Quantity(props: Props) {
  return (
    <div className="filters-quantity-container">
      <h3 className="filters-title filters-quantity-title">Количество экземпляров</h3>
      <QuantityTwoThumbs rtl={false} quantityValues={props.quantityValues} />
    </div>
  );
}
