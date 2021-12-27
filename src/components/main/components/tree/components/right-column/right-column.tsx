import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import SvgImages from 'src/assets/img/svg/svg';
import './right-column.scss'


type Props = {
  trees: Array<string>
  bg: Array<string>
}

export default function ColumnRight(props: Props) {
  return (
    <div className='column-right'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
