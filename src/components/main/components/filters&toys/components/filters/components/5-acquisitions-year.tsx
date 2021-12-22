import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import AcquisitionsTwoThumbs from './acqisions-range';

type Props = {
  toysData: object;
  purchaseYearFilterMin: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  purchaseYearFilterMax: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
};

export default function AcquisitionsYear(props: Props) {
  return (
    <div className="filters-acquisitions-container">
      <h3 className="filters-title filters-acquisitions-title">Год приобретения</h3>
      <AcquisitionsTwoThumbs
        rtl={false}
        purchaseYearFilterMin={props.purchaseYearFilterMin}
        purchaseYearFilterMax={props.purchaseYearFilterMax}
      />
    </div>
  );
}
