import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './right-column.scss';

import TreeToys from './components/tree-toys';
import TreesSaved from './components/trees-saved';

type Props = {
  trees: Array<string>;
  bg: Array<string>;
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
    value: HTMLImageElement | null;
    setValue: React.Dispatch<React.SetStateAction<HTMLImageElement | null>>;
  };
  isArea: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  mainContainer: React.MutableRefObject<HTMLMapElement | null>;
  elementPageXY: {
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
  };
};

export default function ColumnRight(props: Props) {
  return (
    <div className="column-right">
      <div className="column-wrap-container">
        <TreeToys
          toysData={props.toysData}
          favoriteToys={props.favoriteToys}
          setFavoriteToys={props.setFavoriteToys}
          selectedToys={props.selectedToys}
          currentToy={props.currentToy}
          isArea={props.isArea}
          mainContainer={props.mainContainer}
          elementPageXY={props.elementPageXY}
        />
        <div className="trees-saved column-section">
          <h3 className="column-left__title">Вы нарядили</h3>
          <div className="trees-saved-wrap">
            <div className="trees-saved-container">
              {props.trees.map((data, index) => (
                <TreesSaved trees={props.trees} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
