import * as React from 'react';

type Props = {
  trees: Array<string>;
  index: number;
};

export default function TreesSaved(props: Props) {
  return (
    <div
    // id={`card-tree${props.index}`}
    // className={selectedToys.value.includes(data.num) ? 'card__tree active' : 'card__tree'}
    >
      {
        <div className="trees-saved__image-wrap">
          <div className="trees-saved__image-container">
            <img
              src={String(props.trees[Number(`${props.index}`)])}
              alt="Изображение игрушки"
              className="trees-saved__image"
            />
          </div>
        </div>
      }
    </div>
  );
}
