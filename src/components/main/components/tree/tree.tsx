import * as React from 'react';
import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
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
  // TreeChoise
  const [treeChosen, setTreeChosen] = useState<string>(() => {
    const saved = localStorage.getItem('treeChosen');
    const initialValue = saved ? saved : undefined;
    return initialValue || trees[0];
  });
  useEffect(() => {
    localStorage.setItem('treeChosen', treeChosen);
  }, [treeChosen]);
  //BackgrounChoise
  const [bgChosen, setBgChosen] = useState<string>(() => {
    const saved = localStorage.getItem('bgChosen');
    const initialValue = saved ? saved : undefined;
    return initialValue || bg[0];
  });
  useEffect(() => {
    localStorage.setItem('bgChosen', bgChosen);
  }, [bgChosen]);
  // ColorGarland
  const [garlandIsOn, setGarlandIsOn] = useState<boolean>(() => {
    const saved = localStorage.getItem('garlandIsOn');
    const initialValue = saved === 'true' ? true : undefined;
    return initialValue || false;
  });
  const [colorGarland, setColorGarland] = useState<string>(() => {
    const saved = localStorage.getItem('colorGarland');
    const initialValue = saved ? saved : undefined;
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('colorGarland', colorGarland);
    localStorage.setItem('garlandIsOn', String(garlandIsOn));
  }, [colorGarland]);

  const [currentToy, setCurrentToy] = useState<HTMLImageElement>(null);
  const [isArea, setIsArea] = useState<boolean>(false);
  const mainContainer = useRef(null);

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
    const selectToyContainer = document.getElementById(`${currentToy.id.split('-', 1)}`)
    const selectToyCount = document.getElementById(`${currentToy.id.split('-', 1)}-toysCount`)
    selectToyCount.textContent = String(selectToyContainer.childNodes.length - 1)
  }

  const [elementPageXY, setElementPageXY] = useState<Array<number>>([]);

  return (
    <div id="treeSection" className="tree section" onDragEnd={(e) => dragEndHandler(e)}>
      <ColumnLeft
        trees={trees}
        bg={bg}
        volumeIsActive={props.volumeIsActive}
        snowIsActive={{ value: snowIsActive, setValue: setSnowIsActive }}
        treeChosen={{ value: treeChosen, setValue: setTreeChosen }}
        bgChosen={{ value: bgChosen, setValue: setBgChosen }}
        colorGarland={{ value: colorGarland, setValue: setColorGarland }}
        garlandIsOn={{ value: garlandIsOn, setValue: setGarlandIsOn }}
      />
      <ColumnMain
        trees={trees}
        bg={bg}
        volumeIsActive={props.volumeIsActive}
        snowIsActive={{ value: snowIsActive, setValue: setSnowIsActive }}
        treeChosen={{ value: treeChosen, setValue: setTreeChosen }}
        bgChosen={{ value: bgChosen, setValue: setBgChosen }}
        colorGarland={{ value: colorGarland, setValue: setColorGarland }}
        garlandIsOn={{ value: garlandIsOn, setValue: setGarlandIsOn }}
        currentToy={{ value: currentToy, setValue: setCurrentToy }}
        isArea={{ value: isArea, setValue: setIsArea }}
        mainContainer={mainContainer}
        elementPageXY={{ value: elementPageXY, setValue: setElementPageXY }}
      />
      <ColumnRight
        trees={trees}
        bg={bg}
        toysData={toysData}
        favoriteToys={props.favoriteToys}
        setFavoriteToys={props.setFavoriteToys}
        selectedToys={props.selectedToys}
        currentToy={{ value: currentToy, setValue: setCurrentToy }}
        isArea={{ value: isArea, setValue: setIsArea }}
        mainContainer={mainContainer}
        elementPageXY={{ value: elementPageXY, setValue: setElementPageXY }}
      />
    </div>
  );
}
