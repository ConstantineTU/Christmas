import * as React from 'react';
import { Dispatch, useState } from 'react';
import CardItem from './components/toy';
import './toys.scss';

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

export default function Toys({ toysData, favoriteToys, setFavoriteToys }: Props) {
  const [cards, setCards] = useState(toysData);

  return (
    <div className="card-items-wrap">
      <div className='card-items-title-container'><h2 className="card-items-title">Игрушки</h2><div className='card-items-favorite'>{favoriteToys}</div></div>
      <div className="card-items">
        {cards.map((data, index) => (
          <CardItem key={index} data={data} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys} />
        ))}
      </div>
    </div>
  );
}
