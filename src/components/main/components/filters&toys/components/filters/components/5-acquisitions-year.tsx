import * as React from 'react';

type Props = {
  toysData: object;
};

export default function AcquisitionsYear({ toysData }: Props) {
  return (
    <div className="filters-acquisitions-container">
      <h3 className="filters-title filters-acquisitions-title">Год приобретения</h3>
      <div>
        <input
          min="1940"
          max="2021"
          step="1"
          className="filters-quantity-range"
          type="range"
          name="acquisitionsRange"
          id="acquisitionsRange"
        />
      </div>
      <div className="filters-acquisitions-count">
        <div>1940</div>
        <div>2021</div>
      </div>
    </div>
  );
}
