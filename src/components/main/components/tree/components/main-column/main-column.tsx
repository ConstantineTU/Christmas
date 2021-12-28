import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Snowfall from 'react-snowfall';
import './main-column.scss';

type Props = {
  trees: Array<string>;
  bg: Array<string>;
  volumeIsActive: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  snowIsActive: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  treeChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
  bgChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
};

export default function ColumnMain(props: Props) {
  return (
    <div className="column-main">
      <div
        className="column-main-container"
        style={{
          background: `Url(${props.bgChosen.value}) 50% 50% / cover no-repeat`,
        }}
      >
        <img src={props.treeChosen.value} alt="Изображение ёлки`" className="column-main__image" />
      </div>

      {props.snowIsActive.value && <Snowfall />}
    </div>
  );
}
