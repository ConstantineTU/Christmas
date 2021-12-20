import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Favorite({ toysData }: Props) {
  return (
    <div className="filters-favorite-container">
      <div className="filters-favorite-wrap">
        <input id="favoriteToys" type="checkbox" className="filters-favorite__checkbox"></input>
        <label htmlFor="favoriteToys" className="filters-favorite__label">
          Только любимые
        </label>
      </div>
    </div>
  );
}
