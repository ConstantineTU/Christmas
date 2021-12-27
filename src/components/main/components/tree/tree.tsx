import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import ColumnLeft from './components/left-column/left-column';
import ColumnMain from './components/main-column/main-column';
import ColumnRight from './components/right-column/right-column';

import trees from '../../../../assets/img/tree/trees'
import bg from '../../../../assets/img/bg/bg'
import toysData from '../../../../assets/data/data'

type Props = {
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};


export default function Tree(props: Props) {
  return (
    <div className='tree section'>
      <ColumnLeft trees={trees} bg={bg} />
      <ColumnMain trees={trees} bg={bg} />
      <ColumnRight trees={trees} bg={bg}
        toysData={toysData}
        favoriteToys={props.favoriteToys}
        setFavoriteToys={props.setFavoriteToys}
        selectedToys={props.selectedToys} />
    </div>
  );
}
