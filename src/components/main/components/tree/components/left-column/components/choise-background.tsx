import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {
  bg: Array<string>;
  index: number;
  bgChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
};

export default function BgCard(props: Props) {
  const handleChange = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
      props.bgChosen.setValue(`${e.currentTarget.dataset.src}`);
      console.log(props.bgChosen.value);
    }
  }

  return (
    <div
      id={`bg-card${props.index}`}
      onClick={handleChange}
      data-src={props.bg[`${props.index}`]}
      className={props.bgChosen.value.includes(props.bg[`${props.index}`]) ? 'bg-card active' : 'bg-card'}
    >
      {
        <div className="bg-card__image-wrap">
          <div className="bg-card__image-container">
            <img src={props.bg[`${props.index}`]} alt="Изображение игрушки" className="bg-card__image" />
          </div>
        </div>
      }
    </div>
  );
}
