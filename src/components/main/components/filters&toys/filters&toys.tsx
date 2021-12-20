import * as React from 'react';
import { Component } from 'react';

import Filters from './components/filters/filters';
import Toys from './components/toys/toys';


type Props = {
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

export default function FiltersAndToys({ toysData }: Props) {
  return (
    <div className="toys section">
      {<Filters toysData={toysData} />}
      {<Toys toysData={toysData} />}
    </div>
  );
}