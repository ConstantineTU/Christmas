import * as React from 'react';

type Props = {
  toysData: object;
};

export default function Sort({ toysData }: Props) {
  return (
    <div className="filters-sort-container">
      <div className="filters-sort-wrap">
        <h3 className="filters-title">Сортировать</h3>
        <select className="filters-sort__select" name="filters-sort" id="">
          <option className="filters-sort__option" value="">
            По названию от А до Я
          </option>
          <option className="filters-sort__option" value="">
            По названию от Я до А
          </option>
          <option className="filters-sort__option" value="">
            По году приобретения по возрастанию
          </option>
          <option className="filters-sort__option" value="">
            По году приобретения по убыванию
          </option>
        </select>
      </div>
    </div>
  );
}
