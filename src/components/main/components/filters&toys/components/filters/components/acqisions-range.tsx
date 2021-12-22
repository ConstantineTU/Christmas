import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Range } from 'react-range';

type Props = {
  rtl: boolean;
  purchaseYearFilterMin: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  purchaseYearFilterMax: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
};

const STEP = 1;
const MIN = 1940;
const MAX = 2021;

const AcquisitionsTwoThumbs = ({ rtl, purchaseYearFilterMin, purchaseYearFilterMax }: Props) => {
  const [values, setValues] = React.useState([1940, 2021]);

  const handleChangeMin = (values) => {
    purchaseYearFilterMin.setValue(String(values[0]));
    purchaseYearFilterMax.setValue(String(values[1]));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
          handleChangeMin(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div ref={props.ref} className="filters-quantity-range" id="acquisitionsRange">
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
              radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%),
              radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%)`,
              border: '1px solid',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '4px',
                width: '4px',
                borderRadius: '50%',
                backgroundColor: isDragged ? '#548BF4' : '#CCC',
              }}
            />
          </div>
        )}
      />
      <output className="filters-acquisitions-count" id="output">
        <div>{values[0].toFixed(0)}</div> <div>{values[1].toFixed(0)}</div>
      </output>
    </div>
  );
};

export default AcquisitionsTwoThumbs;
