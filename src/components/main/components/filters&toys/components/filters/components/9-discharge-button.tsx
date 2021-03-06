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
    const favoriteToysLabel = document.getElementById('favoriteToysLabel') as HTMLButtonElement;
    const quantityRange = document.getElementById('quantityRange') as HTMLDivElement;
    const acquisitionsRange = document.getElementById('acquisitionsRange') as HTMLDivElement;
    const sizeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-size__button');
    const colorButtons = document.querySelectorAll<HTMLButtonElement>('.filters-colors__button');
    const shapeButtons = document.querySelectorAll<HTMLButtonElement>('.filters-forms__button');
    for (let i = 0; i < sizeButtons.length; i += 1) {
      sizeButtons[i].classList.remove('active');
    }
    for (let i = 0; i < colorButtons.length; i += 1) {
      colorButtons[i].classList.remove('active');
    }
    for (let i = 0; i < shapeButtons.length; i += 1) {
      shapeButtons[i].classList.remove('active');
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
    if (window.confirm('Вы уверены? Будут удалены все сохранённые настройки включая выбранные игрушки')) {
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
