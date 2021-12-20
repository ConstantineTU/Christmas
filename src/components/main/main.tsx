import * as React from 'react';
import { Component } from 'react';
import './main.scss';

import Home from './components/home/home'
import FiltersAndToys from './components/filters/filters&toys'
import Tree from './components/tree/tree'

type Props = {
  activePage: string
  toysData: {
    num: string
    name: string
    count: string
    year: string
    shape: string
    color: string
    size: string
    favorite: boolean
  }[]
}

export default function Main({ activePage, toysData }: Props) {
  const pages = ['домашняя', 'игрушки', 'ёлка']

  return (
    <main className="main">
      {(activePage === pages[0]) && <Home />}
      {(activePage === pages[1]) && <FiltersAndToys toysData={toysData} />}
      {(activePage === pages[2]) && <Tree />}
    </main>
  );
}

