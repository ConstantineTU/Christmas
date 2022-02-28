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
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.id && props.selectedFavoriteFilter.value.includes(e.currentTarget.dataset.id)) {
      props.selectedFavoriteFilter.setValue(
        props.selectedFavoriteFilter.value.filter((toy) => toy !== e.currentTarget.dataset.id)
      );
      e.currentTarget.classList.remove('active');
      props.favoriteFilter.setValue(false);
    } else if (e.currentTarget.dataset.id) {
      props.selectedFavoriteFilter.value.push(e.currentTarget.dataset.id);
      e.currentTarget.classList.add('active');
      props.favoriteFilter.setValue(true);
    }
  };

  return (
    <div className="filters-favorite-container">
      <div className="filters-favorite-wrap">
        <button
          id="favoriteToysLabel"
          className={
            props.selectedFavoriteFilter.value.includes('1')
              ? 'filters-favorite__button active'
              : 'filters-favorite__button'
          }
          data-id={'1'}
          onClick={(e) => {
            handleChange(e);
          }}
        >
          Только любимые
        </button>
      </div>
    </div>
  );
}
