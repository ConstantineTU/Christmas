import * as React from 'react';
import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall';
import './main-column.scss';

import Garland from './components/garlands';

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
  currentToy: {
    value: HTMLImageElement;
    setValue: React.Dispatch<React.SetStateAction<HTMLImageElement>>;
  };
  isArea: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  mainContainer: React.MutableRefObject<any>;
  elementPageXY: {
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
  };
};

export default function ColumnMain(props: Props) {
  const [width, setWidth] = useState(120);
  const [count, setCount] = useState(4);

  function dragEndHandler(e: React.DragEvent<HTMLAreaElement>): void { }

  function dragOverHandler(e: React.DragEvent<HTMLAreaElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLAreaElement>): void {
    e.preventDefault();
    props.isArea.setValue(true);
    props.elementPageXY.setValue([e.pageX, e.pageY]);
  }

  return (
    <div className="column-main">
      <div
        className="column-main-container"
        style={{
          background: `Url(${props.bgChosen.value}) 50% 50% / cover no-repeat`,
        }}
      >
        <div className="garland-tree-container">
          {[...Array(8)].map((data, index) => {
            return (
              <Garland
                index={index}
                key={index}
                width={width + index * 50}
                count={count + index * 4}
                colorGarland={props.colorGarland}
                garlandIsOn={props.garlandIsOn}
              />
            );
          })}
        </div>
        <map name="image-map" className="image-map">
          <area
            id="image-map"
            data-drop-target="true"
            alt="areaForToys"
            className="image-map-container"
            ref={props.mainContainer}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e)}
            coords="240,0,197,72,157,151,139,202,139,245,125,267,94,311,119,305,119,324,107,328,93,349,116,351,116,364,89,367,88,
            381,74,398,121,384,103,392,104,399,107,411,101,417,34,480,64,503,48,536,8,591,38,589,34,610,17,627,29,646,72,654,94,
            692,152,657,168,672,178,656,186,665,210,659,195,679,226,667,225,683,247,677,253,698,275,681,299,671,323,667,333,649,
            348,669,392,683,425,690,410,648,417,629,446,632,431,615,422,590,450,604,466,600,391,538,433,516,385,474,435,458,386,
            419,411,402,360,355,376,334,350,331,394,338,375,302,345,275,358,264,324,233,355,227,312,193,328,169,314,140,279,68,
            268,41,257,28,264,37,257,30,246,12"
            shape="poly"
          ></area>
        </map>
        <img src={props.treeChosen.value} alt="Изображение ёлки`" className="column-main__image" useMap="#image-map" />
      </div>
      {props.snowIsActive.value && <Snowfall />}
    </div>
  );
}
