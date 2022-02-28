import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import AcquisitionsTwoThumbs from './acqisions-range';

type Props = {
  toysData: object;
  purchaseYearValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
};

export default function AcquisitionsYear(props: Props) {
  return (
    <div className="filters-acquisitions-container">
      <h3 className="filters-title filters-acquisitions-title">Год приобретения</h3>
      <AcquisitionsTwoThumbs rtl={false} purchaseYearValues={props.purchaseYearValues} />
    </div>
  );
}
