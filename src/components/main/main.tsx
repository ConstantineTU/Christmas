import * as React from 'react';
import { Dispatch, useState, SetStateAction } from 'react';
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
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;

};

export default function Main({ activePage, toysData, favoriteToys, setFavoriteToys }: Props) {
  const [filters, setFilters] = useState({
    search: '',
    sorting: 'By title(A-Z)',
    shapeFilter: ['Ball'],
    colourFilter: ['Red'],
    sizeFilter: ['Big'],
    quantityFilter: { min: '', max: '' },
    purchaseYearFilter: { min: '', max: '' },
    favoriteFilter: true
  });

  const [search, setSearch] = useState('')
  const pages = ['домашняя', 'игрушки', 'ёлка'];
  const newToysData = toysData.filter((toy) => toy.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main className="main">
      {activePage === pages[0] && <Home />}
      {activePage === pages[1] && (
        <FiltersAndToys toysData={newToysData} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys}
          search={{ value: search, setValue: setSearch }} />
      )}
      {activePage === pages[2] && <Tree />}
    </main>
  );
}
