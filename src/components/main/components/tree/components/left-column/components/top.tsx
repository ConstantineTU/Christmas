import * as React from 'react';
import { useEffect, useRef } from 'react';
import SvgImages from '../../../../../../../assets/img/svg/svg';

type Props = {
  volumeIsActive: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  snowIsActive: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function TopButtons(props: Props) {
  const handleChangeVolume = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      props.volumeIsActive.setValue(false);
    } else {
      e.currentTarget.classList.add('active');
      props.volumeIsActive.setValue(true);
    }
  };
  const handleChangeSnow = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      props.snowIsActive.setValue(false);
    } else {
      e.currentTarget.classList.add('active');
      props.snowIsActive.setValue(true);
    }
  };
  const snowBtn = useRef<HTMLButtonElement | null>(null);
  useEffect(
    () =>
      props.snowIsActive.value ? snowBtn.current.classList.add('active') : snowBtn.current.classList.remove('active'),
    [props.snowIsActive]
  );
  const volumeBtn = useRef<HTMLButtonElement | null>(null);
  useEffect(
    () =>
      props.volumeIsActive.value
        ? volumeBtn.current.classList.add('active')
        : volumeBtn.current.classList.remove('active'),
    [props.volumeIsActive]
  );
  return (
    <div className="column-left__top-buttons">
      <div className="column-left-wrap">
        <div className="top-buttons-container">
          <button ref={volumeBtn} className="top-buttons__button volume" onClick={handleChangeVolume}>
            {!props.volumeIsActive.value ? (
              <img className="top-buttons__img" src={SvgImages.mute} alt="audio" />
            ) : (
              <img className="top-buttons__img" src={SvgImages.audio} alt="audio" />
            )}
          </button>
          <button ref={snowBtn} className="top-buttons__button snow" onClick={handleChangeSnow}>
            <img className="top-buttons__img" src={SvgImages.snow} alt="snow" />
          </button>
        </div>
      </div>
    </div>
  );
}
