import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Search({ toysData }: Props) {
  return (
    <div className="filters-search-container">
      <div className="filters-search-wrap">
        <label htmlFor="search" className="filters-search__label">
          <input className="filters-search__input" type="search" name="search" id="search" placeholder="Поиск" />
        </label>
      </div>
    </div>
  );
}
