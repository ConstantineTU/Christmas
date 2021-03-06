import * as React from 'react';

type Props = {
  index: number;
  width: number;
  count: number;
  colorGarland: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
  garlandIsOn: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function Garland(props: Props) {
  let radius = 80;
  let radiusRight = 20;
  return (
    <React.Fragment>
      {props.garlandIsOn.value && (
        <ul className="garland-line" style={{ width: props.width, height: props.width * 1.7 }}>
          {[...Array<undefined[]>(props.count)].map((data, index) => {
            const transformLi = `rotate(${radius}deg) translate(${Math.floor(
              props.width / 2
            )}px) rotate(-${radius}deg)`;
            radius += Math.floor(80 / props.count);
            return (
              <li
                key={index}
                className={`garland-color ${props.colorGarland.value}`}
                style={{ transform: transformLi }}
              ></li>
            );
          })}
          {[...Array<undefined[]>(props.count)].map((data, index) => {
            const transformLi = `rotate(${radiusRight}deg) translate(${Math.floor(
              props.width / 2
            )}px) rotate(-${radiusRight}deg)`;
            radiusRight += Math.floor(80 / props.count);
            return (
              <li
                key={index}
                className={`garland-color ${props.colorGarland.value}`}
                style={{ transform: transformLi }}
              ></li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}
