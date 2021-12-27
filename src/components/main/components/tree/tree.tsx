import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import ColumnLeft from './components/left-column/left-column';
import ColumnMid from './components/middle-column/middle-column';
import ColumnRight from './components/right-column/right-column';

import trees from '../../../../assets/img/tree/trees'
import bg from '../../../../assets/img/bg/bg'

// type Props = {
//   activePage: string
// }


export default function Tree({ }) {
  return (
    <div className='tree section'>
      <ColumnLeft trees={trees} bg={bg} />
      <ColumnMid />
      <ColumnRight />
    </div>
  );
}
