import * as React from 'react';
import { Dispatch } from 'react';

type Props = {
  toysData: object;
  sorts: {
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
  };
};

export default function Sort(props: Props) {
  const handleChange = ({ target }: { target: HTMLSelectElement }) => {
    props.sorts.setValue(target.value);
  };

  return (
    <div className="filters-sort-container">
      <div className="filters-sort-wrap">
        <h3 className="filters-title">Сортировать</h3>
        <select className="filters-sort__select" name="filters-sort" id="" onChange={handleChange}>
          <option className="filters-sort__option" value="">
            Отсортировать по...
          </option>
          <option className="filters-sort__option" value="AZ">
            По названию от А до Я
          </option>
          <option className="filters-sort__option" value="ZA">
            По названию от Я до А
          </option>
          <option className="filters-sort__option" value="yearAscending">
            По году приобретения по возрастанию
          </option>
          <option className="filters-sort__option" value="yearDescending">
            По году приобретения по убыванию
          </option>
        </select>
      </div>
    </div>
  );
}
