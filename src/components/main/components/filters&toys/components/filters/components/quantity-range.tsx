import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Range } from 'react-range';

const STEP = 1;
const MIN = 1;
const MAX = 12;

type Props = {
  rtl: boolean;
  quantityValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
};

const QuantityTwoThumbs = ({ rtl, quantityValues }: Props) => {
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
        values={quantityValues.value}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          quantityValues.setValue(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              display: 'flex',
              width: '100%',
            }}
          >
            <div ref={props.ref} className="filters-quantity-range" id="quantityRange">
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
      <output className="filters-quantity-count" id="output">
        <div>{quantityValues.value[0].toFixed(0)}</div> <div>{quantityValues.value[1].toFixed(0)}</div>
      </output>
    </div>
  );
};

export default QuantityTwoThumbs;