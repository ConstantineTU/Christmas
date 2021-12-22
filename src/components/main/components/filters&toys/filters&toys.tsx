import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

import Filters from './components/filters/filters';
import Toys from './components/toys/toys';

type Props = {
  toysData: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  }[];
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
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
};

export default function FiltersAndToys(props: Props) {
  return (
    <div className="toys section">
      {
        <Filters
          toysData={props.toysData}
          search={props.search}
          sorts={props.sorts}
          shapeFilter={props.shapeFilter}
          colorFilter={props.colorFilter}
          sizeFilter={props.sizeFilter}
          favoriteFilter={props.favoriteFilter}
          quantityValues={props.quantityValues}
          purchaseYearValues={props.purchaseYearValues}
        />
      }
      {<Toys toysData={props.toysData} favoriteToys={props.favoriteToys} setFavoriteToys={props.setFavoriteToys} />}
    </div>
  );
}
