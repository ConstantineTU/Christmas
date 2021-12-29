import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Images from '../../../../../../../../assets/img/toys/images';

type Props = {
  data: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  };
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  index: number;
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

export default function CardItem(props: Props) {
  function dragStartHandler(e: React.DragEvent<HTMLImageElement>): void {
    props.currentToy.setValue(e.currentTarget);
    props.isArea.setValue(false);
  }

  function dragEndHandler(e: React.DragEvent<HTMLImageElement>): void {
    if (props.isArea.value && props.currentToy.value) {
      const imageMap = document.getElementById('image-map');
      imageMap.after(props.currentToy.value);
      props.currentToy.value.style.left =
        props.elementPageXY.value[0] - props.mainContainer.current.getBoundingClientRect().left - 24 + 'px';
      props.currentToy.value.style.top =
        props.elementPageXY.value[1] -
        props.mainContainer.current.getBoundingClientRect().top -
        window.scrollY +
        10 +
        'px';
    } else {
      document.getElementById(`${props.currentToy.value.id.split('-', 1)}`).append(props.currentToy.value);
      props.currentToy.value.style.left = 'calc(50% - 24px)';
      props.currentToy.value.style.top = 'calc(50% - 24px)';
    }
  }

  return (
    <div id={`toyContainer${props.index}`} className={'column-card__item'}>
      {
        <div className="column-card__image-wrap">
          <div id={`${props.index}`} className="column-card__image-container">
            {[...Array(Number(props.data.count))].map((data, index) => {
              return (
                <img
                  key={index}
                  src={Images[props.data.num]}
                  id={`${props.index}-${Number(props.data.count) - index}`}
                  alt="Изображение игрушки"
                  className="column-card__image"
                  draggable="true"
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                />
              );
            })}
            <div id={`${props.index}-toysCount`} className="column-card__count">
              {props.data.count}
            </div>
          </div>
        </div>
      }
    </div>
  );
}
