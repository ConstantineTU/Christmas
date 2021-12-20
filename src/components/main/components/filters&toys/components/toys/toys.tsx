import * as React from 'react';
import { Component, Fragment, useState } from 'react';
import CardItem from './components/toy'
import './toys.scss'

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
  const [cards, setCards] = useState(toysData);


  return (
    <Fragment>
      <div className='card-items-wrap'>
        <h2 className='card-items-title'>Игрушки</h2>
        <div className='card-items'>
          {cards.map((data, index) => <CardItem key={index} data={data} />)}
        </div>
      </div>
    </Fragment>
  );
}
