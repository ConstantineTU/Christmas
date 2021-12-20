import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Categories({ toysData }: Props) {
  return (
    <div className="filters-categories-container">
      <h3 className="filters-title filters-categories-title">Категории</h3>
      <div className="filters-categories__checkbox-wrap">
        <input className="filters-categories__checkbox" type="checkbox" name="filtersAll" id="filtersAll" />
        <label className="filters-categories__label" htmlFor="filtersAll" id="filtersAllLabel">
          Все
        </label>
      </div>
    </div>
  );
}
