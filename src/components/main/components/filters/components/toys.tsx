import * as React from 'react';
import { Component, Fragment } from 'react';

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


export default function Toys({ toysData }: Props) {
  const toysRender = () => {
    for (let key of toysData) {
      console.log(key);
    }
    return (
      <Fragment>

      </Fragment>
    )
  }

  return (

    <div>
      <button onClick={toysRender}>Вызов функции</button>
    </div>
  );
}
