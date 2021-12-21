import * as React from 'react';
import { Dispatch } from 'react';

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
  favoriteToys: number
  setFavoriteToys: Dispatch<React.SetStateAction<number>>
};

export default function FiltersAndToys({ toysData, favoriteToys, setFavoriteToys }: Props) {
  return (
    <div className="toys section">
      {<Filters toysData={toysData} />}
      {<Toys toysData={toysData} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys} />}
    </div>
  );
}
