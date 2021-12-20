import * as React from 'react';
import SvgImages from '../../../../../../../assets/img/svg/svg';

type Props = {
  toysData: object;
};

export default function Forms({ toysData }: Props) {
  return (
    <div className="filters-forms-container">
      <h3 className="filters-title filters-forms-title">Форма</h3>
      <div className="filters-forms-wrap">
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.bell} alt="" />
          Колокол
        </button>
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.ball} alt="" />
          Шар
        </button>
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.cone} alt="" />
          Шишка
        </button>
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.star} alt="" />
          Звезда
        </button>
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.snowflake} alt="" />
          Снежинка
        </button>
        <button className="filters-forms__button">
          <img className="filters-forms__img" src={SvgImages.toy} alt="" />
          Фигурка
        </button>
      </div>
    </div>
  );
}
