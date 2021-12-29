import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {
  trees: Array<string>;
  bg: Array<string>;
  volumeIsActive: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  snowIsActive: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  treeChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
  bgChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
  colorGarland: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
  garlandIsOn: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function BottomButtons(props: Props) {
  const handleChange = () => {
    localStorage.removeItem('snowIsActive');
    props.snowIsActive.setValue(false)
    props.volumeIsActive.setValue(false)
    localStorage.removeItem('treeChosen');
    props.treeChosen.setValue(props.trees[0])
    localStorage.removeItem('bgChosen');
    props.bgChosen.setValue(props.bg[0])
    localStorage.removeItem('garlandIsOn');
    props.garlandIsOn.setValue(false)
    localStorage.removeItem('colorGarland');
    props.colorGarland.setValue('')
  }

  return (
    <div className="bottom-buttons column-section">
      <div className="column-left-wrap">
        <div className="bottom-buttons-container">
          <button className="bottom-buttons__button save">Сохранить</button>
          <button className="bottom-buttons__button reset" onClick={handleChange}>Сбросить настройки</button>
        </div>
      </div>
    </div>
  );
}
