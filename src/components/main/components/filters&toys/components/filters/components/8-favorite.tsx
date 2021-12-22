import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  favoriteFilter: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
};

export default function Favorite(props: Props) {
  const handleChange = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      props.favoriteFilter.setValue(false);
    } else {
      e.currentTarget.classList.add('active');
      props.favoriteFilter.setValue(true);
    }
  };

  return (
    <div className="filters-favorite-container">
      <div className="filters-favorite-wrap">
        <input id="favoriteToys" type="checkbox" className="filters-favorite__checkbox"></input>
        <label
          id="favoriteToysLabel"
          htmlFor="favoriteToys"
          className="filters-favorite__label"
          onClick={(e) => {
            handleChange(e);
          }}
        >
          Только любимые
        </label>
      </div>
    </div>
  );
}
