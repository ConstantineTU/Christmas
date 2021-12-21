import * as React from 'react';
import { Dispatch } from 'react';
import './main.scss';

import Home from './components/home/home';
import FiltersAndToys from './components/filters&toys/filters&toys';
import Tree from './components/tree/tree';

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
  favoriteToys: number
  setFavoriteToys: Dispatch<React.SetStateAction<number>>
};

export default function Main({ activePage, toysData, favoriteToys, setFavoriteToys }: Props) {
  const pages = ['домашняя', 'игрушки', 'ёлка'];

  return (
    <main className="main">
      {activePage === pages[0] && <Home />}
      {activePage === pages[1] && <FiltersAndToys toysData={toysData} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys} />}
      {activePage === pages[2] && <Tree />}
    </main>
  );
}
