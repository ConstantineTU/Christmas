import * as React from 'react';

type Props = {
  toysData: object;
};

export default function DischargeButton({ toysData }: Props) {
  return (
    <div className="filters-discharge-container">
      <div className="filters-discharge-wrap">
        <button id="dischargeFilters" className="filters-discharge__button">
          Сбросить фильтры
        </button>
        <button id="dischargeFilters" className="filters-discharge__button">
          Сбросить настройки
        </button>
      </div>
    </div>
  );
}
