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
  const handleChange = () => {
    const colorButtons = document.querySelectorAll<HTMLLabelElement>('.filters-colors__button');
    const defaultColors = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
    const selectedColors: string[] = [];
    for (let i = 0; i < colorButtons.length; i += 1) {
      if (colorButtons[i].classList.contains('active')) {
        selectedColors.push(String(colorButtons[i].dataset.value));
      }
    }
    if (selectedColors.length) {
      props.colorFilter.setValue(selectedColors);
    } else {
      props.colorFilter.setValue(defaultColors);
    }
  };

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.selectedColors.value.includes(String(e.currentTarget.dataset.id))) {
      props.selectedColors.setValue(props.selectedColors.value.filter((toy) => toy !== e.currentTarget.dataset.id));
      e.currentTarget.classList.remove('active');
    } else {
      props.selectedColors.value.push(String(e.currentTarget.dataset.id));
      e.currentTarget.classList.add('active');
    }
    handleChange();
  };

  return (
    <div className="filters-colors-container">
      <h3 className="filters-title filters-colors-title">Цвет</h3>
      <div className="filters-colors-wrap">
        <button
          className={
            props.selectedColors.value.includes('1')
              ? 'filters-colors__button white active'
              : 'filters-colors__button white'
          }
          data-value={'белый'}
          data-id={'1'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></button>
        <button
          className={
            props.selectedColors.value.includes('2')
              ? 'filters-colors__button yellow active'
              : 'filters-colors__button yellow'
          }
          data-value={'желтый'}
          data-id={'2'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></button>
        <button
          className={
            props.selectedColors.value.includes('3')
              ? 'filters-colors__button red active'
              : 'filters-colors__button red'
          }
          data-value={'красный'}
          data-id={'3'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></button>
        <button
          className={
            props.selectedColors.value.includes('4')
              ? 'filters-colors__button blue active'
              : 'filters-colors__button blue'
          }
          data-value={'синий'}
          data-id={'4'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></button>
        <button
          className={
            props.selectedColors.value.includes('5')
              ? 'filters-colors__button green active'
              : 'filters-colors__button green'
          }
          data-value={'зелёный'}
          data-id={'5'}
          onClick={(e) => {
            toggleActive(e);
          }}
        ></button>
      </div>
    </div>
  );
}
