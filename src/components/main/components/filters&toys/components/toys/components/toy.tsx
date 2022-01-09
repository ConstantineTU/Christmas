import * as React from 'react';
import { Dispatch, SetStateAction, Component } from 'react';
import Images from '../../../../../../../assets/img/toys/images';

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
};

const getFavoriteCard = (
  e: React.MouseEvent<HTMLDivElement>,
  setFavoriteToys: Props['setFavoriteToys'],
  favoriteToys: Props['favoriteToys'],
  selectedToys: Props['selectedToys']
) => {
  if (selectedToys.value.includes(String(e.currentTarget.id))) {
    selectedToys.setValue(selectedToys.value.filter((toy) => toy !== e.currentTarget.id));
    e.currentTarget.classList.remove('active');
    setFavoriteToys(favoriteToys - 1);
  } else if (favoriteToys >= 20) {
    window.alert('Извините, все слоты заполнены');
  } else {
    selectedToys.value.push(e.currentTarget.id);
    e.currentTarget.classList.add('active');
    setFavoriteToys(favoriteToys + 1);
  }
};

export default class CardItem extends Component<Props> {
  render() {
    return (
      <div
        id={this.props.data.num}
        onClick={(e) =>
          getFavoriteCard(e, this.props.setFavoriteToys, this.props.favoriteToys, this.props.selectedToys)
        }
        className={this.props.selectedToys.value.includes(this.props.data.num) ? 'card__item active' : 'card__item'}
      >
        {<h1 className="card__title">{this.props.data.name}</h1>}
        {
          <div className="card__image-wrap">
            <div className="card__image-container">
              <img src={String(Images[this.props.data.num])} alt="Изображение игрушки" className="card__image" />
            </div>
          </div>
        }
        {<p className="card__text">Количество: {this.props.data.count}</p>}
        {<p className="card__text">Год покупки: {this.props.data.year}</p>}
        {<p className="card__text">Форма игрушки: {this.props.data.shape}</p>}
        {<p className="card__text">Цвет игрушки: {this.props.data.color}</p>}
        {<p className="card__text">Размер игрушки: {this.props.data.size}</p>}
        {<p className="card__text">Любимая: {this.props.data.favorite ? 'да' : 'нет'}</p>}
      </div>
    );
  }
}
