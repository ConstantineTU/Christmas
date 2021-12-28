import * as React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import ColumnLeft from './components/left-column/left-column';
import ColumnMain from './components/main-column/main-column';
import ColumnRight from './components/right-column/right-column';

import trees from '../../../../assets/img/tree/trees';
import bg from '../../../../assets/img/bg/bg';
import toysData from '../../../../assets/data/data';

type Props = {
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  volumeIsActive: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function Tree(props: Props) {
  const [snowIsActive, setSnowIsActive] = useState<boolean>(() => {
    const saved = localStorage.getItem('snowIsActive');
    const initialValue = saved === 'true' ? true : undefined;
    return initialValue || false;
  });
  useEffect(() => {
    localStorage.setItem('snowIsActive', String(snowIsActive));
  }, [snowIsActive]);

  return (
    <div className="tree section">
      <ColumnLeft
        trees={trees}
        bg={bg}
        volumeIsActive={props.volumeIsActive}
        snowIsActive={{ value: snowIsActive, setValue: setSnowIsActive }}
      />
      <ColumnMain
        trees={trees}
        bg={bg}
        volumeIsActive={props.volumeIsActive}
        snowIsActive={{ value: snowIsActive, setValue: setSnowIsActive }}
      />
      <ColumnRight
        trees={trees}
        bg={bg}
        toysData={toysData}
        favoriteToys={props.favoriteToys}
        setFavoriteToys={props.setFavoriteToys}
        selectedToys={props.selectedToys}
      />
    </div>
  );
}
