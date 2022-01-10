import * as React from 'react';
import { Dispatch, SetStateAction, Component } from 'react';
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
    value: HTMLImageElement | null;
    setValue: React.Dispatch<React.SetStateAction<HTMLImageElement | null>>;
  };
  isArea: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  mainContainer: React.MutableRefObject<HTMLMapElement | null>;
  elementPageXY: {
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
  };
};

export default class CardItem extends Component<Props> {
  dragStartHandler(e: React.DragEvent<HTMLImageElement>): void {
    this.props.currentToy.setValue(e.currentTarget);
    this.props.isArea.setValue(false);
  }

  dragEndHandler(): void {
    if (this.props.isArea.value && this.props.currentToy.value) {
      const imageMap = document.getElementById('image-map') as HTMLMapElement;
      imageMap.after(this.props.currentToy.value);
      if (this.props.mainContainer.current) {
        this.props.currentToy.value.style.left = `${
          this.props.elementPageXY.value[0] - this.props.mainContainer.current.getBoundingClientRect().left - 24
        }px`;
        this.props.currentToy.value.style.top = `${
          this.props.elementPageXY.value[1] -
          this.props.mainContainer.current.getBoundingClientRect().top -
          window.scrollY -
          24
        }px`;
      }
    } else if (this.props.currentToy.value) {
      const selectToyContainer = document.getElementById(
        `${String(this.props.currentToy.value.id.split('-', 1))}`
      ) as HTMLDivElement;
      selectToyContainer.append(this.props.currentToy.value);
      this.props.currentToy.value.style.left = 'calc(50% - 24px)';
      this.props.currentToy.value.style.top = 'calc(50% - 24px)';
    }
  }

  render() {
    return (
      <div id={`toyContainer${this.props.index}`} className={'column-card__item'}>
        {
          <div className="column-card__image-wrap">
            <div id={`${this.props.index}`} className="column-card__image-container">
              {[...Array<undefined[]>(Number(this.props.data.count))].map((data, index) => {
                return (
                  <img
                    key={index}
                    src={String(Images[Number(this.props.data.num) - 1])}
                    id={`${this.props.index}-${Number(this.props.data.count) - index}`}
                    alt="Изображение игрушки"
                    className="column-card__image"
                    draggable="true"
                    onDragStart={(e) => this.dragStartHandler(e)}
                    onDragLeave={() => this.dragEndHandler()}
                    onDragEnd={() => this.dragEndHandler()}
                  />
                );
              })}
              <div id={`${this.props.index}-toysCount`} className="column-card__count">
                {this.props.data.count}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
