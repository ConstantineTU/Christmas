import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {
  bg: Array<string>
  index: number
}


export default function BgCard(props: Props) {
  return (
    <div
    // id={`card-tree${props.index}`}
    // className={selectedToys.value.includes(data.num) ? 'card__tree active' : 'card__tree'}
    >
      {
        <div className="bg-card__image-wrap">
          <div className="bg-card__image-container">
            <img src={props.bg[`${props.index}`]} alt="Изображение игрушки" className="bg-card__image" />
          </div>
        </div>
      }
    </div >
  );
}
