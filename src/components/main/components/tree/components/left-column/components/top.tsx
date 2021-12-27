import * as React from 'react';
import { Component, Dispatch, SetStateAction, useState, useEffect } from 'react';
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
  const handleChangeVolume = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      props.volumeIsActive.setValue(false);
    } else {
      e.currentTarget.classList.add('active');
      props.volumeIsActive.setValue(true);
    }
  };
  const handleChangeSnow = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      props.snowIsActive.setValue(false);
    } else {
      e.currentTarget.classList.add('active');
      props.snowIsActive.setValue(true);
    }
  };

  return (
    <div className="column-left__top-buttons">
      <div className="column-left-wrap">
        <div className="top-buttons-container">
          <button id="volumeBtn" className="top-buttons__button volume" onClick={handleChangeVolume}>
            {!props.volumeIsActive ? (
              <img className="top-buttons__img" src={SvgImages.mute} alt="audio" />
            ) : (
              <img className="top-buttons__img" src={SvgImages.audio} alt="audio" />
            )}
          </button>
          <button className="top-buttons__button snow" onClick={handleChangeSnow}>
            <img className="top-buttons__img" src={SvgImages.snow} alt="snow" />
          </button>
        </div>
      </div>
    </div>
  );
}
