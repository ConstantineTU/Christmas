import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import SvgImages from 'src/assets/img/svg/svg';
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
};

export default function ColumnRight(props: Props) {
  return (
    <div className="column-right">
      <TreeToys
        toysData={props.toysData}
        favoriteToys={props.favoriteToys}
        setFavoriteToys={props.setFavoriteToys}
        selectedToys={props.selectedToys}
      />
      <div className="trees-saved column-section">
        <div className="trees-saved-wrap">
          <h3 className="column-left__title">Вы нарядили</h3>
          <div className="trees-saved-container">
            {props.trees.map((data, index) => (
              <TreesSaved trees={props.trees} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
