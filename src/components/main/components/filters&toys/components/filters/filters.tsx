import * as React from 'react';
import { Component } from 'react';
import './filters.scss';
import Sort from './components/1-sorting';
import Categories from './components/2-categories';
import Forms from './components/3-forms';
import Quantity from './components/4-quantity';
import AcquisitionsYear from './components/5-acquisitions-year';
import Colors from './components/6-colors';
import Size from './components/7-size';
import Favorite from './components/8-favorite';
import DischargeButton from './components/9-discharge-button';

type Props = {
  toysData: object;
};

export default function Filters({ toysData }: Props) {
  return (
    <div className="filters">
      <div className="filters-container">
        <Sort toysData={toysData} />
        <Categories toysData={toysData} />
        <Forms toysData={toysData} />
        <Quantity toysData={toysData} />
        <AcquisitionsYear toysData={toysData} />
        <Colors toysData={toysData} />
        <Size toysData={toysData} />
        <Favorite toysData={toysData} />
        <DischargeButton toysData={toysData} />
      </div>
    </div>
  );
}
