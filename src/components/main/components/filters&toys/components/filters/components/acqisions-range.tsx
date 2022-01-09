import * as React from 'react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Range } from 'react-range';
import * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

type Props = {
  rtl: boolean;
  purchaseYearValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
};

type PropsRange = {
  props: {
    onMouseDown: React.MouseEventHandler<HTMLDivElement>;
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    style: Style;
    ref: React.LegacyRef<HTMLDivElement | null>;
  };
  children: Element;
};

const STEP = 1;
const MIN = 1940;
const MAX = 2021;

const AcquisitionsTwoThumbs = ({ rtl, purchaseYearValues }: Props) => {
  const handleChangeBackground = () => {};
  useEffect(() => {
    const acquisitionsRange = document.getElementById('acquisitionsRange');
    const minValue = ((100 / (MAX - MIN)) * (purchaseYearValues.value[1] - MIN)).toFixed(0);
    const maxValue = ((100 / (MAX - MIN)) * (MAX - MIN - (MAX - purchaseYearValues.value[0]))).toFixed(0);
    acquisitionsRange.style.background = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(196, 196, 196) 0%, rgb(196, 196, 196)
          ${maxValue}%, rgb(36, 198, 219) ${maxValue}%, rgb(36, 198, 219) ${minValue}%, rgb(196, 196, 196) ${minValue}%, 
          rgb(196, 196, 196) 100%) repeat scroll 0% 0%`;
  }, [purchaseYearValues]);
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
        values={purchaseYearValues.value}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(value) => {
          purchaseYearValues.setValue(value);
          handleChangeBackground();
        }}
        renderTrack={({ props, children }: PropsRange) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
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
          <div {...props} className="filters-quantity-range-thumb">
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
        <div>{purchaseYearValues.value[0].toFixed(0)}</div> <div>{purchaseYearValues.value[1].toFixed(0)}</div>
      </output>
    </div>
  );
};

export default AcquisitionsTwoThumbs;
