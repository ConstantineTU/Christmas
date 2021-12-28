import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {
  trees: Array<string>;
  index: number;
  treeChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
};

export default function TreeCard(props: Props) {
  const handleChange = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
      props.treeChosen.setValue(`${e.currentTarget.dataset.src}`);
    }
  }

  return (
    <div
      id={`tree-card${props.index}`}
      onClick={handleChange}
      data-src={props.trees[`${props.index}`]}
      className={props.treeChosen.value.includes(props.trees[`${props.index}`]) ? 'tree-card active' : 'tree-card'}
    >
      {
        <div className="tree-card__image-wrap">
          <div className="tree-card__image-container">
            <img src={props.trees[`${props.index}`]} alt="Изображение игрушки" className="tree-card__image" />
          </div>
        </div>
      }
    </div>
  );
}
