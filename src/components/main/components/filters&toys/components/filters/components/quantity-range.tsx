import * as React from 'react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Range } from 'react-range';
import * as CSS from 'csstype';

const STEP = 1;
const MIN = 1;
const MAX = 12;

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

type Props = {
  rtl: boolean;
  quantityValues: {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>;
  };
};

type PropsRange = {
  props: {
    onMouseDown: React.MouseEventHandler<HTMLDivElement>;
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    style: Style;
    ref: React.LegacyRef<HTMLDivElement>;
  };
  children?: HTMLDivElement;
  isDragged?: React.DragEventHandler<HTMLDivElement>;
};

const QuantityTwoThumbs = ({ rtl, quantityValues }: Props) => {
  const handleChangeBackground = () => {};
  useEffect(() => {
    const quantityRange = document.getElementById('quantityRange') as HTMLDivElement;
    const minValue = ((100 / (MAX - MIN)) * (quantityValues.value[1] - MIN)).toFixed(0);
    const maxValue = ((100 / (MAX - MIN)) * (MAX - MIN - (MAX - quantityValues.value[0]))).toFixed(0);
    quantityRange.style.background = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(196, 196, 196) 0%, rgb(196, 196, 196)
                ${maxValue}%, rgb(36, 198, 219) ${maxValue}%, rgb(36, 198, 219) ${minValue}%, rgb(196, 196, 196) ${minValue}%, 
                rgb(196, 196, 196) 100%) repeat scroll 0% 0%`;
  }, [quantityValues]);
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
        onChange={(value: number[]) => {
          quantityValues.setValue(value);
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
            <div ref={props.ref} className="filters-quantity-range" id="quantityRange">
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }: PropsRange) => (
          <div className="filters-quantity-range-thumb" {...props}>
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
