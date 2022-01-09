import * as React from 'react';
import SvgImages from '../../../../../../../assets/img/svg/svg';

type Props = {
  toysData: object;
  shapeFilter: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  selectedShape: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Forms(props: Props) {
  const handleChange = () => {
    const shapeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-forms__button');
    const defaultShapes = ['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];
    const selectedShapes = [];
    for (let i = 0; i < shapeButtons.length; i += 1) {
      if (shapeButtons[i].classList.contains('active')) {
        selectedShapes.push(shapeButtons[i].value);
      }
    }
    if (selectedShapes.length) {
      props.shapeFilter.setValue(selectedShapes);
    } else {
      props.shapeFilter.setValue(defaultShapes);
    }
  };

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.selectedShape.value.includes(e.currentTarget.id)) {
      props.selectedShape.setValue(props.selectedShape.value.filter((toy) => toy !== e.currentTarget.id));
      e.currentTarget.classList.remove('active');
    } else {
      props.selectedShape.value.push(e.currentTarget.id);
      e.currentTarget.classList.add('active');
    }
    handleChange();
  };

  return (
    <div className="filters-forms-container">
      <h3 className="filters-title filters-forms-title">Форма</h3>
      <div className="filters-forms-wrap">
        <button
          id="1"
          className={props.selectedShape.value.includes('1') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'колокольчик'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.bell} alt="" />
          Колокол
        </button>
        <button
          id="2"
          className={props.selectedShape.value.includes('2') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'шар'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.ball} alt="" />
          Шар
        </button>
        <button
          id="3"
          className={props.selectedShape.value.includes('3') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'шишка'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.cone} alt="" />
          Шишка
        </button>
        <button
          id="4"
          className={props.selectedShape.value.includes('4') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'звезда'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.star} alt="" />
          Звезда
        </button>
        <button
          id="5"
          className={props.selectedShape.value.includes('5') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'снежинка'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.snowflake} alt="" />
          Снежинка
        </button>
        <button
          id="6"
          className={props.selectedShape.value.includes('6') ? 'filters-forms__button active' : 'filters-forms__button'}
          value={'фигурка'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.toy} alt="" />
          Фигурка
        </button>
      </div>
    </div>
  );
}
