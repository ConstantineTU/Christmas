import * as React from 'react';
import { Dispatch } from 'react';

type Props = {
  toysData: object;
  search: {
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
  };
};

export default function Search(props: Props) {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    props.search.setValue(target.value);
  };

  return (
    <div className="filters-search-container">
      <div className="filters-search-wrap">
        <label htmlFor="search" className="filters-search__label">
          <input
            className="filters-search__input"
            type="search"
            name="search"
            id="search"
            placeholder="Поиск"
            value={props.search.value}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
