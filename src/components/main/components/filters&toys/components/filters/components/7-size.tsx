import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  sizeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
};

export default function Size(props: Props) {
  const toggleActive = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
    }
    handleChange(e);
  };

  const handleChange = (e) => {
    const sizeButtons = document.querySelectorAll<HTMLLabelElement>('.filters-size__label');
    const defaultCizes = ['большой', 'средний', 'малый'];
    const selectedSizes = [];
    for (let sizeButton of sizeButtons) {
      if (sizeButton.classList.contains('active')) {
        selectedSizes.push(sizeButton.dataset.value);
      }
    }
    if (selectedSizes.length) {
      props.sizeFilter.setValue(selectedSizes);
    } else {
      props.sizeFilter.setValue(defaultCizes);
    }
  };

  return (
    <div className="filters-size-container">
      <h3 className="filters-title filters-size-title">Размер</h3>
      <div className="filters-size-wrap">
        <input id="bigToys" type="checkbox" className="filters-size__checkbox bigToys"></input>
        <label
          htmlFor="bigToys"
          className="filters-size__label bigToys"
          data-value={'большой'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Большой
        </label>
        <input id="midToys" type="checkbox" className="filters-size__checkbox midToys"></input>
        <label
          htmlFor="midToys"
          className="filters-size__label midToys"
          data-value={'средний'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Средний
        </label>
        <input id="smallToys" type="checkbox" className="filters-size__checkbox smallToys"></input>
        <label
          htmlFor="smallToys"
          className="filters-size__label smallToys"
          data-value={'малый'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Маленький
        </label>
      </div>
    </div>
  );
}
