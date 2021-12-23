import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  sizeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  selectedSizes: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Size(props: Props) {
  const toggleActive = (e) => {
    if (props.selectedSizes.value.includes(e.currentTarget.dataset.id)) {
      props.selectedSizes.setValue(props.selectedSizes.value.filter((toy) => toy !== e.currentTarget.dataset.id));
      e.currentTarget.classList.remove('active');
    } else {
      props.selectedSizes.value.push(e.currentTarget.dataset.id);
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
          className={
            props.selectedSizes.value.includes('1')
              ? 'filters-size__label bigToys active'
              : 'filters-size__label bigToys white'
          }
          data-value={'большой'}
          data-id={'1'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Большой
        </label>
        <input id="midToys" type="checkbox" className="filters-size__checkbox midToys"></input>
        <label
          htmlFor="midToys"
          className={
            props.selectedSizes.value.includes('2')
              ? 'filters-size__label midToys active'
              : 'filters-size__label midToys white'
          }
          data-value={'средний'}
          data-id={'2'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Средний
        </label>
        <input id="smallToys" type="checkbox" className="filters-size__checkbox smallToys"></input>
        <label
          htmlFor="smallToys"
          className={
            props.selectedSizes.value.includes('3')
              ? 'filters-size__label smallToys active'
              : 'filters-size__label smallToys white'
          }
          data-value={'малый'}
          data-id={'3'}
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
