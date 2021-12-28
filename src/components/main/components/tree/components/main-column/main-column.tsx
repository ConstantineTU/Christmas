import * as React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import './main-column.scss';

import Garland from './components/garlands'

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
  colorGarland: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
  garlandIsOn: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
};

export default function ColumnMain(props: Props) {
  const [width, setWidth] = useState(120)
  const [count, setCount] = useState(4)

  return (
    <div className="column-main">
      <div
        className="column-main-container"
        style={{
          background: `Url(${props.bgChosen.value}) 50% 50% / cover no-repeat`,
        }}
      >
        <div className='garland-tree-container'>
          {[...Array(8)].map((data, index) => {

            return <Garland index={index} key={index} width={width + index * 50}
              count={count + index * 4} colorGarland={props.colorGarland}
              garlandIsOn={props.garlandIsOn} />

          })}
        </div>
        <img src={props.treeChosen.value} alt="Изображение ёлки`" className="column-main__image" />
      </div>
      {props.snowIsActive.value && <Snowfall />}
    </div>
  );
}
