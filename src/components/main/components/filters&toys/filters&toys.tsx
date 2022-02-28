import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './btn-to-top.scss';
import Filters from './components/filters/filters';
import Toys from './components/toys/toys';
import BtnToTop from './btn-to-top';

type Props = {
  activePage: string;
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
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
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

export default function FiltersAndToys(props: Props) {
  return (
    <div className="toys section">
      <BtnToTop activePage={props.activePage} />
      {
        <Filters
          activePage={props.activePage}
          toysData={props.toysData}
          search={props.search}
          sorts={props.sorts}
          shapeFilter={props.shapeFilter}
          colorFilter={props.colorFilter}
          sizeFilter={props.sizeFilter}
          favoriteFilter={props.favoriteFilter}
          quantityValues={props.quantityValues}
          purchaseYearValues={props.purchaseYearValues}
          selectedShape={props.selectedShape}
          selectedColors={props.selectedColors}
          selectedSizes={props.selectedSizes}
          selectedFavoriteFilter={props.selectedFavoriteFilter}
          selectedToys={props.selectedToys}
          favoriteToys={props.favoriteToys}
          setFavoriteToys={props.setFavoriteToys}
        />
      }
      {
        <Toys
          toysData={props.toysData}
          selectedToys={props.selectedToys}
          favoriteToys={props.favoriteToys}
          setFavoriteToys={props.setFavoriteToys}
        />
      }
    </div>
  );
}
