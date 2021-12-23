import * as React from 'react';
import { Dispatch, useEffect } from 'react';

type Props = {
  activePage: string;
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

  useEffect(() => {
    const searchInput = document.getElementById('search');
    searchInput.focus();
  }, [props.activePage]);

  const resetSearch = () => {
    props.search.setValue('')
  }

  return (
    <div className="filters-search-container">
      <div className="filters-search-wrap">
        <input
          className={props.search.value ? 'filters-search__input active' : 'filters-search__input'}
          type="search"
          name="search"
          id="search"
          placeholder="Поиск"
          value={props.search.value}
          onChange={handleChange}
        />
        <div
          className={props.search.value ? 'filters-search__label active' : 'filters-search__label'}
          onClick={resetSearch}>

        </div>
      </div>
    </div>
  );
}
