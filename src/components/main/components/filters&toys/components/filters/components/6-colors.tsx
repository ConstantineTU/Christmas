import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  colorFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  selectedColors: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Colors(props: Props) {
  const toggleActive = (e) => {
    if (props.selectedColors.value.includes(e.currentTarget.dataset.id)) {
      props.selectedColors.setValue(props.selectedColors.value.filter((toy) => toy !== e.currentTarget.dataset.id));
      e.currentTarget.classList.remove('active');
    } else {
      props.selectedColors.value.push(e.currentTarget.dataset.id);
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
          className={
            props.selectedColors.value.includes('1')
              ? 'filters-colors__label white active'
              : 'filters-colors__label white'
          }
          data-value={'белый'}
          data-id={'1'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="yelow" type="checkbox" className="filters-colors__checkbox yellow"></input>
        <label
          htmlFor="yelow"
          className={
            props.selectedColors.value.includes('2')
              ? 'filters-colors__label yellow active'
              : 'filters-colors__label yellow'
          }
          data-value={'желтый'}
          data-id={'2'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="red" type="checkbox" className="filters-colors__checkbox red"></input>
        <label
          htmlFor="red"
          className={
            props.selectedColors.value.includes('3') ? 'filters-colors__label red active' : 'filters-colors__label red'
          }
          data-value={'красный'}
          data-id={'3'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="blue" type="checkbox" className="filters-colors__checkbox blue"></input>
        <label
          htmlFor="blue"
          className={
            props.selectedColors.value.includes('4')
              ? 'filters-colors__label blue active'
              : 'filters-colors__label blue'
          }
          data-value={'синий'}
          data-id={'4'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
        <input id="green" type="checkbox" className="filters-colors__checkbox green"></input>
        <label
          htmlFor="green"
          className={
            props.selectedColors.value.includes('5')
              ? 'filters-colors__label green active'
              : 'filters-colors__label green'
          }
          data-value={'зелёный'}
          data-id={'5'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></label>
      </div>
    </div>
  );
}
