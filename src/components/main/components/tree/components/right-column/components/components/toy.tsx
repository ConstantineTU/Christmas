import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Images from '../../../../../../../../assets/img/toys/images';

type Props = {
  data: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  };
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function CardItem({ data, favoriteToys, setFavoriteToys, selectedToys }: Props) {
  return (
    <div id={data.num} className={'column-card__item'}>
      {
        <div className="column-card__image-wrap">
          <div className="column-card__image-container">
            <img src={Images[data.num]} alt="Изображение игрушки" className="column-card__image" />
            <div className="column-card__count">
              <span id="toysCount">{data.count}</span>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
