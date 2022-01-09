import * as React from 'react';

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
  mainContainer: React.MutableRefObject<HTMLElement>;
};

export default function BottomButtons(props: Props) {
  const handleChange = () => {
    const toysOnTree = props.mainContainer.current.childNodes;
    localStorage.removeItem('snowIsActive');
    props.snowIsActive.setValue(false);
    localStorage.removeItem('volumeIsActive');
    props.volumeIsActive.setValue(false);
    localStorage.removeItem('treeChosen');
    props.treeChosen.setValue(props.trees[0]);
    localStorage.removeItem('bgChosen');
    props.bgChosen.setValue(props.bg[0]);
    localStorage.removeItem('garlandIsOn');
    props.garlandIsOn.setValue(false);
    localStorage.removeItem('colorGarland');
    props.colorGarland.setValue('');

    for (let i = 0; i < toysOnTree.length; i += 1) {
      const toy = toysOnTree[i] as HTMLImageElement;
      if (toy.id !== 'image-map') {
        i -= 1;
        const selectToyContainer = document.getElementById(`${String(toy.id.split('-', 1))}`);
        selectToyContainer.append(toy);
        const selectToyCount = document.getElementById(`${String(toy.id.split('-', 1))}-toysCount`);
        selectToyCount.textContent = String(selectToyContainer.childNodes.length - 1);
        toy.style.left = 'calc(50% - 24px)';
        toy.style.top = 'calc(50% - 24px)';
      }
    }
  };

  return (
    <div className="bottom-buttons column-section">
      <div className="column-left-wrap">
        <div className="bottom-buttons-container">
          <button className="bottom-buttons__button save">Сохранить</button>
          <button className="bottom-buttons__button reset" onClick={handleChange}>
            Сбросить настройки
          </button>
        </div>
      </div>
    </div>
  );
}
