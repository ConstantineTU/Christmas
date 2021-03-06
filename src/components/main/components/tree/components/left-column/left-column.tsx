import * as React from 'react';
import './left-column.scss';

import TopButtons from './components/top';
import TreeCard from './components/choise-tree';
import BgCard from './components/choise-background';
import Garland from './components/choise-garland';
import BottomButtons from './components/bottom';

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
  mainContainer: React.MutableRefObject<HTMLMapElement | null>;
};

export default function ColumnLeft(props: Props) {
  return (
    <div className="column-left">
      <div className="column-wrap-container">
        <TopButtons snowIsActive={props.snowIsActive} volumeIsActive={props.volumeIsActive} />

        <div className="choise-tree column-section">
          <div className="column-left-wrap">
            <h3 className="column-left__title">Выберите ёлку</h3>
            <div className="choise-tree-container">
              {props.trees.map((data, index) => (
                <TreeCard trees={props.trees} index={index} key={index} treeChosen={props.treeChosen} />
              ))}
            </div>
          </div>
        </div>

        <div className="choise-bg column-section">
          <div className="column-left-wrap">
            <h3 className="column-left__title">Выберите фон</h3>
            <div className="choise-bg-container">
              {props.bg.map((data, index) => (
                <BgCard bg={props.bg} index={index} key={index} bgChosen={props.bgChosen} />
              ))}
            </div>
          </div>
        </div>

        <Garland colorGarland={props.colorGarland} garlandIsOn={props.garlandIsOn} />
        <BottomButtons
          trees={props.trees}
          bg={props.bg}
          colorGarland={props.colorGarland}
          garlandIsOn={props.garlandIsOn}
          bgChosen={props.bgChosen}
          treeChosen={props.treeChosen}
          snowIsActive={props.snowIsActive}
          volumeIsActive={props.volumeIsActive}
          mainContainer={props.mainContainer}
        />
      </div>
    </div>
  );
}
