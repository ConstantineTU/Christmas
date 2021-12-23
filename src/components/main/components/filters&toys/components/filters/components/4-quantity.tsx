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
  // const [rangeBackground, setRangeBackground] = useState(`linear-gradient(to right, #24c5db 0%, #24c5db 100%, #c4c4c4 100%, #c4c4c4 100%)`)
  // const [minValue,setMinValue]=useState(0)
  // const [vaxValue,setMaxValue]=useState(100)
  return (
    <div className="filters-quantity-container">
      <h3 className="filters-title filters-quantity-title">Количество экземпляров</h3>
      <QuantityTwoThumbs rtl={false} quantityValues={props.quantityValues} />
    </div>
  );
}
