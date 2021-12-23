import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  favoriteFilter: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  selectedFavoriteFilter: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Favorite(props: Props) {
  const handleChange = (e) => {
    if (props.selectedFavoriteFilter.value.includes(e.currentTarget.dataset.id)) {
      props.selectedFavoriteFilter.setValue(
        props.selectedFavoriteFilter.value.filter((toy) => toy !== e.currentTarget.dataset.id)
      );
      e.currentTarget.classList.remove('active');
      props.favoriteFilter.setValue(false);
    } else {
      props.selectedFavoriteFilter.value.push(e.currentTarget.dataset.id);
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
          className={
            props.selectedFavoriteFilter.value.includes('1')
              ? 'filters-favorite__label active'
              : 'filters-favorite__label'
          }
          data-id={'1'}
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
