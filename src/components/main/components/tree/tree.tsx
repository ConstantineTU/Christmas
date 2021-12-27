import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import ColumnLeft from './components/left-column/left-column';
import ColumnMain from './components/main-column/main-column';
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
      <ColumnMain trees={trees} bg={bg} />
      <ColumnRight trees={trees} bg={bg} />
    </div>
  );
}
