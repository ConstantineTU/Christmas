import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  colorFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
};

export default function Colors(props: Props) {
  const toggleActive = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
    }
    handleChange(e);
  };

  const handleChange = (e) => {
    const colorButtons = document.querySelectorAll<HTMLLabelElement>('.filters-colors__label');
    const defaultColors = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
    const selectedColors = [];
    for (let colorButton of colorButtons) {
      if (colorButton.classList.contains('active')) {
        selectedColors.push(colorButton.dataset.value);
      }
    }
    console.log(selectedColors);
    if (selectedColors.length) {
      props.colorFilter.setValue(selectedColors);
    } else {
      props.colorFilter.setValue(defaultColors);
    }
  };

  return (
    <div className="filters-colors-container">
      <h3 className="filters-title filters-colors-title">Цвет</h3>
      <div className="filters-colors-wrap">
        <input id="white" type="checkbox" className="filters-colors__checkbox white"></input>
        <label
          htmlFor="white"
          className="filters-colors__label white"
          data-value={'белый'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="yelow" type="checkbox" className="filters-colors__checkbox yellow"></input>
        <label
          htmlFor="yelow"
          className="filters-colors__label yellow"
          data-value={'желтый'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="red" type="checkbox" className="filters-colors__checkbox red"></input>
        <label
          htmlFor="red"
          className="filters-colors__label red"
          data-value={'красный'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="blue" type="checkbox" className="filters-colors__checkbox blue"></input>
        <label
          htmlFor="blue"
          className="filters-colors__label blue"
          data-value={'синий'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="green" type="checkbox" className="filters-colors__checkbox green"></input>
        <label
          htmlFor="green"
          className="filters-colors__label green"
          data-value={'зелёный'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
      </div>
    </div>
  );
}
