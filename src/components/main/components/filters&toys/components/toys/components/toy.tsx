import * as React from 'react';
import Images from '../../../../../../../assets/img/toys/images'

type Props = {
  data: {
    num: string
    name: string
    count: string
    year: string
    shape: string
    color: string
    size: string
    favorite: boolean
  }
}

export default function CardItem({ data }: Props) {
  return (
    <div className="card__item">
      {<h1 className='card__title'>{data.name}</h1>}
      {<div className='card__image-wrap'>
        <div className='card__image-container' >
          <img src={Images[data.num]} alt='Изображение игрушки' className='card__image' />
        </div>
      </div>}
      {<p className='card__text'>Количество: {data.count}</p>}
      {<p className='card__text'>Год покупки: {data.year}</p>}
      {<p className='card__text'>Форма игрушки: {data.shape}</p>}
      {<p className='card__text'>Цвет игрушки: {data.color}</p>}
      {<p className='card__text'>Размер игрушки: {data.size}</p>}
      {<p className='card__text'>Любимая: {data.favorite ? 'да' : 'нет'}</p>}
    </div>
  )
}