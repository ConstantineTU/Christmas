import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  toysData: object;
  search: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  shapeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  colorFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  sizeFilter: {
    value: string[];
    setValue: Dispatch<SetStateAction<string[]>>;
  };
  favoriteFilter: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  quantityValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
  purchaseYearValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export default function DischargeButton(props: Props) {
  const handleChangeReset = () => {
    const favoriteToysLabel = document.getElementById('favoriteToysLabel');
    const quantityRange = document.getElementById('quantityRange');
    const acquisitionsRange = document.getElementById('acquisitionsRange');
    const sizeButtons = document.querySelectorAll<HTMLLabelElement>('.filters-size__label');
    const colorButtons = document.querySelectorAll<HTMLLabelElement>('.filters-colors__label');
    const shapeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-forms__button');
    for (let sizeButton of sizeButtons) {
      sizeButton.classList.remove('active');
    }
    for (let colorButton of colorButtons) {
      colorButton.classList.remove('active');
    }
    for (let shapeButton of shapeButtons) {
      shapeButton.classList.remove('active');
    }
    const defaultColors = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
    const defaultCizes = ['большой', 'средний', 'малый'];
    const defaultShapes = ['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];
    props.search.setValue('');
    favoriteToysLabel.classList.remove('active');
    props.favoriteFilter.setValue(false);
    props.sizeFilter.setValue(defaultCizes);
    props.colorFilter.setValue(defaultColors);
    props.shapeFilter.setValue(defaultShapes);
    props.quantityValues.setValue([1, 12]);
    props.purchaseYearValues.setValue([1940, 2021]);
    quantityRange.style.background = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(196, 196, 196) 0%, rgb(196, 196, 196)
                0%, rgb(36, 198, 219) 0%, rgb(36, 198, 219) 100%, rgb(196, 196, 196) 100%, 
                rgb(196, 196, 196) 100%) repeat scroll 0% 0%`;
    acquisitionsRange.style.background = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(196, 196, 196) 0%, rgb(196, 196, 196)
                0%, rgb(36, 198, 219) 0%, rgb(36, 198, 219) 100%, rgb(196, 196, 196) 100%, 
                rgb(196, 196, 196) 100%) repeat scroll 0% 0%`;
  };

  const getClearLocalStorage = () => {
    if (confirm('Вы уверены? Будут удалены все сохранённые настройки включая выбранные игрушки')) {
      localStorage.clear();
      handleChangeReset();
      props.setFavoriteToys(0);
      props.selectedToys.setValue([]);
    }
  };

  return (
    <div className="filters-discharge-container">
      <div className="filters-discharge-wrap">
        <button id="dischargeFilters" className="filters-discharge__button" onClick={handleChangeReset}>
          Сбросить фильтры
        </button>
        <button id="resetSettings" className="filters-discharge__button" onClick={getClearLocalStorage}>
          Сбросить все настройки
        </button>
      </div>
    </div>
  );
}
