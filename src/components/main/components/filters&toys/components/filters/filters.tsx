import * as React from 'react';
import { Dispatch } from 'react';
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
import Search from './components/10-search';

type Props = {
  toysData: object;
  search: {
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
  };
  sorts: {
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
  };
};

export default function Filters(props: Props) {
  return (
    <div className="filters">
      <div className="filters-container">
        <Sort toysData={props.toysData} sorts={props.sorts} />
        <div className="filters-container-wrap">
          <Categories toysData={props.toysData} />

          <Search toysData={props.toysData} search={props.search} />
        </div>
        <Forms toysData={props.toysData} />
        <Quantity toysData={props.toysData} />
        <AcquisitionsYear toysData={props.toysData} />
        <Colors toysData={props.toysData} />
        <Size toysData={props.toysData} />
        <Favorite toysData={props.toysData} />
        <DischargeButton toysData={props.toysData} />
      </div>
    </div>
  );
}
