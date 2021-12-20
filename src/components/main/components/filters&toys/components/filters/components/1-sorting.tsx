import * as React from 'react';
import { Component } from 'react';


type Props = {
  toysData: object
}

export default function Toys({ toysData }: Props) {
  return (
    <div className=''>

      <h3 className="filters-title">Сортировать</h3>
      <div className="shape">Форма:
        <select name="filters-sort" id=""></select>
      </div>

    </div>
  );
}