import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import ToyItem from './components/toy';

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

export default function TreeToys(props: Props) {
  return (
    <div className="column-card-items-wrap">
      <div className="column-card-items-title-container">
        <h3 className="column-card-items-title">Развесьте игрушки</h3>
        <div className="column-card-items-favorite">{props.favoriteToys}</div>
      </div>
      <div className="column-card-items">
        {props.toysData.map((data, index) =>
          props.selectedToys.value.length !== 0
            ? props.selectedToys.value.includes(data.num) && (
                <ToyItem
                  selectedToys={props.selectedToys}
                  key={index}
                  data={data}
                  favoriteToys={props.favoriteToys}
                  setFavoriteToys={props.setFavoriteToys}
                />
              )
            : index <= 19 && (
                <ToyItem
                  selectedToys={props.selectedToys}
                  key={index}
                  data={data}
                  favoriteToys={props.favoriteToys}
                  setFavoriteToys={props.setFavoriteToys}
                />
              )
        )}
      </div>
    </div>
  );
}
