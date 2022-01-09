import * as React from 'react';

type Props = {
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
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const garlandButton = document.querySelectorAll('.garland__button');

    if (e.currentTarget.classList.contains('active')) {
      for (let i = 0; i < garlandButton.length; i += 1) garlandButton[i].classList.remove('active');
      props.garlandIsOn.setValue(false);
      props.colorGarland.setValue('');
    } else {
      for (let i = 0; i < garlandButton.length; i += 1) garlandButton[i].classList.remove('active');
      e.currentTarget.classList.add('active');
      props.garlandIsOn.setValue(true);
      props.colorGarland.setValue(e.currentTarget.dataset.color);
    }
  };

  return (
    <div className="garland column-section">
      <div className="column-left-wrap">
        <h3 className="column-left__title">Выберете гирлянду</h3>
        <div className="garland-container">
          <div className="garland-buttons-container">
            <button
              className={
                props.colorGarland.value === 'multicolor' && props.garlandIsOn.value
                  ? 'garland__button multicolor active'
                  : 'garland__button multicolor'
              }
              data-color={'multicolor'}
              onClick={handleChange}
            ></button>
            <button
              className={
                props.colorGarland.value === 'red' && props.garlandIsOn.value
                  ? 'garland__button red active'
                  : 'garland__button red'
              }
              data-color={'red'}
              onClick={handleChange}
            ></button>
            <button
              className={
                props.colorGarland.value === 'blue' && props.garlandIsOn.value
                  ? 'garland__button blue active'
                  : 'garland__button blue'
              }
              data-color={'blue'}
              onClick={handleChange}
            ></button>
            <button
              className={
                props.colorGarland.value === 'yellow' && props.garlandIsOn.value
                  ? 'garland__button yellow active'
                  : 'garland__button yellow'
              }
              data-color={'yellow'}
              onClick={handleChange}
            ></button>
            <button
              className={
                props.colorGarland.value === 'green' && props.garlandIsOn.value
                  ? 'garland__button green active'
                  : 'garland__button green'
              }
              data-color={'green'}
              onClick={handleChange}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
