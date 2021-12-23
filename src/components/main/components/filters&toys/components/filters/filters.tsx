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
  activePage: string;
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
  quantityValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
  purchaseYearValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
  selectedShape: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  selectedColors: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  selectedSizes: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  selectedFavoriteFilter: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Filters(props: Props) {
  return (
    <div className="filters">
      <div className="filters-container">
        <Sort toysData={props.toysData} sorts={props.sorts} />
        <div className="filters-container-wrap">
          <Search toysData={props.toysData} search={props.search} activePage={props.activePage} />
        </div>
        <Forms toysData={props.toysData} shapeFilter={props.shapeFilter} selectedShape={props.selectedShape} />
        <Quantity toysData={props.toysData} quantityValues={props.quantityValues} />
        <AcquisitionsYear toysData={props.toysData} purchaseYearValues={props.purchaseYearValues} />
        <Colors toysData={props.toysData} colorFilter={props.colorFilter} selectedColors={props.selectedColors} />
        <Size toysData={props.toysData} sizeFilter={props.sizeFilter} selectedSizes={props.selectedSizes} />
        <Favorite
          toysData={props.toysData}
          favoriteFilter={props.favoriteFilter}
          selectedFavoriteFilter={props.selectedFavoriteFilter}
        />
        <DischargeButton
          toysData={props.toysData}
          search={props.search}
          shapeFilter={props.shapeFilter}
          colorFilter={props.colorFilter}
          sizeFilter={props.sizeFilter}
          favoriteFilter={props.favoriteFilter}
          quantityValues={props.quantityValues}
          purchaseYearValues={props.purchaseYearValues}
        />
      </div>
    </div>
  );
}
