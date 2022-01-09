import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import CardItem from './components/toy';
import './toys.scss';

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
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Toys(props: Props) {
  return (
    <div className="card-items-wrap">
      <div className="card-items-title-container">
        <h2 className="card-items-title">Игрушки</h2>
        <div className="card-items-favorite">{props.favoriteToys}</div>
      </div>
      {!props.toysData.length && <h3 className="card-items-subtitle">Извините, совпадений не обнаружено</h3>}
      <div className="card-items">
        {props.toysData.map((data, index) => (
          <CardItem
            selectedToys={props.selectedToys}
            key={index}
            data={data}
            favoriteToys={props.favoriteToys}
            setFavoriteToys={props.setFavoriteToys}
          />
        ))}
      </div>
    </div>
  );
}
