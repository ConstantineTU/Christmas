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
};

export default function FiltersAndToys(props: Props) {
  return (
    <div className="toys section">
      {<Filters toysData={props.toysData} search={props.search} sorts={props.sorts} />}
      {<Toys toysData={props.toysData} favoriteToys={props.favoriteToys} setFavoriteToys={props.setFavoriteToys} />}
    </div>
  );
}
