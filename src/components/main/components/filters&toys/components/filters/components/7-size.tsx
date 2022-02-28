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
  const handleChange = () => {
    const sizeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-size__button');
    const defaultCizes = ['большой', 'средний', 'малый'];
    const selectedSizes: string[] = [];
    for (let i = 0; i < sizeButtons.length; i += 1) {
      if (sizeButtons[i].classList.contains('active')) {
        selectedSizes.push(String(sizeButtons[i].dataset.value));
      }
    }
    if (selectedSizes.length) {
      props.sizeFilter.setValue(selectedSizes);
    } else {
      props.sizeFilter.setValue(defaultCizes);
    }
  };

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.selectedSizes.value.includes(String(e.currentTarget.dataset.id))) {
      props.selectedSizes.setValue(props.selectedSizes.value.filter((toy) => toy !== e.currentTarget.dataset.id));
      e.currentTarget.classList.remove('active');
    } else {
      props.selectedSizes.value.push(String(e.currentTarget.dataset.id));
      e.currentTarget.classList.add('active');
    }
    handleChange();
  };
  return (
    <div className="filters-size-container">
      <h3 className="filters-title filters-size-title">Размер</h3>
      <div className="filters-size-wrap">
        <button
          className={
            props.selectedSizes.value.includes('1')
              ? 'filters-size__button bigToys active'
              : 'filters-size__button bigToys white'
          }
          data-value={'большой'}
          data-id={'1'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Большой
        </button>
        <button
          className={
            props.selectedSizes.value.includes('2')
              ? 'filters-size__button midToys active'
              : 'filters-size__button midToys white'
          }
          data-value={'средний'}
          data-id={'2'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Средний
        </button>
        <button
          className={
            props.selectedSizes.value.includes('3')
              ? 'filters-size__button smallToys active'
              : 'filters-size__button smallToys white'
          }
          data-value={'малый'}
          data-id={'3'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          Маленький
        </button>
      </div>
    </div>
  );
}
