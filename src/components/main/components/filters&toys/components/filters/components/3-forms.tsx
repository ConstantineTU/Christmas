import * as React from 'react';
import SvgImages from '../../../../../../../assets/img/svg/svg';

type Props = {
  toysData: object;
  shapeFilter: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function Forms(props: Props) {
  const toggleActive = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
    }
    handleChange(e);
  };

  const handleChange = (e) => {
    const shapeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-forms__button');
    const defaultShapes = ['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];
    const selectedShapes = [];
    for (let shapeButton of shapeButtons) {
      if (shapeButton.classList.contains('active')) {
        selectedShapes.push(shapeButton.value);
      }
    }
    console.log(selectedShapes);
    if (selectedShapes.length) {
      props.shapeFilter.setValue(selectedShapes);
    } else {
      props.shapeFilter.setValue(defaultShapes);
    }
  };

  return (
    <div className="filters-forms-container">
      <h3 className="filters-title filters-forms-title">Форма</h3>
      <div className="filters-forms-wrap">
        <button
          id="shapeBell"
          className="filters-forms__button"
          value={'колокольчик'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.bell} alt="" />
          Колокол
        </button>
        <button
          id="shapeBell"
          className="filters-forms__button"
          value={'шар'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.ball} alt="" />
          Шар
        </button>
        <button
          id="shapeBell"
          className="filters-forms__button"
          value={'шишка'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.cone} alt="" />
          Шишка
        </button>
        <button
          id="shapeBell"
          className="filters-forms__button"
          value={'звезда'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.star} alt="" />
          Звезда
        </button>
        <button
          id="shapeBell"
          className="filters-forms__button"
          value={'снежинка'}
          onClick={(e) => {
            toggleActive(e);
          }}
        >
          <img className="filters-forms__img" src={SvgImages.snowflake} alt="" />
          Снежинка
        </button>
        <button
          id="shapeBell"
          className="filters-forms__button"
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
