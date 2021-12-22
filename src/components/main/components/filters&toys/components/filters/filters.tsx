import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './filters.scss';
import Sort from './components/1-sorting';
import Categories from './components/2-categories';
import Forms from './components/3-forms';
import Quantity from './components/4-quantity';
import AcquisitionsYear from './components/5-acquisitions-year';
import Colors from './components/6-colors';
import Size from './components/7-size';
import Favorite from './components/8-favorite';
import DischargeButton from './components/9-discharge-button';
import Search from './components/10-search';

type Props = {
  toysData: object;
  search: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  sorts: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  shapeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  colorFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  sizeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  favoriteFilter: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  quantityFilterMin: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  quantityFilterMax: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  purchaseYearFilterMin: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  purchaseYearFilterMax: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
};

export default function Filters(props: Props) {
  return (
    <div className="filters">
      <div className="filters-container">
        <Sort toysData={props.toysData} sorts={props.sorts} />
        <div className="filters-container-wrap">
          <Categories toysData={props.toysData} />

          <Search toysData={props.toysData} search={props.search} />
        </div>
        <Forms toysData={props.toysData} shapeFilter={props.shapeFilter} />
        <Quantity
          toysData={props.toysData}
          quantityFilterMin={props.quantityFilterMin}
          quantityFilterMax={props.quantityFilterMax}
        />
        <AcquisitionsYear
          toysData={props.toysData}
          purchaseYearFilterMin={props.purchaseYearFilterMin}
          purchaseYearFilterMax={props.purchaseYearFilterMax}
        />
        <Colors toysData={props.toysData} colorFilter={props.colorFilter} />
        <Size toysData={props.toysData} sizeFilter={props.sizeFilter} />
        <Favorite toysData={props.toysData} favoriteFilter={props.favoriteFilter} />
        <DischargeButton toysData={props.toysData} />
      </div>
    </div>
  );
}
