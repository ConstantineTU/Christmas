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
  currentToy: {
    value: HTMLImageElement;
    setValue: React.Dispatch<React.SetStateAction<HTMLImageElement>>;
  };
  isArea: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  mainContainer: React.MutableRefObject<any>;
  elementPageXY: {
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
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
                  index={index}
                  key={index}
                  data={data}
                  favoriteToys={props.favoriteToys}
                  setFavoriteToys={props.setFavoriteToys}
                  currentToy={props.currentToy}
                  isArea={props.isArea}
                  mainContainer={props.mainContainer}
                  elementPageXY={props.elementPageXY}
                />
              )
            : index <= 19 && (
                <ToyItem
                  selectedToys={props.selectedToys}
                  index={index}
                  key={index}
                  data={data}
                  favoriteToys={props.favoriteToys}
                  setFavoriteToys={props.setFavoriteToys}
                  currentToy={props.currentToy}
                  isArea={props.isArea}
                  mainContainer={props.mainContainer}
                  elementPageXY={props.elementPageXY}
                />
              )
        )}
      </div>
    </div>
  );
}
