import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';
import './left-column.scss'

import TopButtons from './components/top'
import TreeCard from './components/choise-tree'
import BgCard from './components/choise-background'
import Garland from './components/choise-garland'
import BottomButtons from './components/bottom'


type Props = {
  trees: Array<string>
  bg: Array<string>
}

export default function ColumnLeft(props: Props) {
  return (
    <div className='column-left'>
      <TopButtons />

      <div className='choise-tree column-section'>
        <h3 className='column-left__title'>Выберите ёлку</h3>
        <div className='choise-tree-container'>
          {props.trees.map((data, index) => (
            <TreeCard trees={props.trees} index={index} key={index} />
          ))}
        </div>
      </div>

      <div className='choise-bg column-section'>
        <h3 className='column-left__title'>Выберите фон</h3>
        <div className='choise-bg-container'>
          {props.bg.map((data, index) => (
            <BgCard bg={props.bg} index={index} key={index} />
          ))}
        </div>
      </div>

      <Garland />
      <BottomButtons />
    </div>
  );
}
