import * as React from 'react';
import { Component, Dispatch, SetStateAction, useState, useEffect } from 'react';
import SvgImages from '../../../../../../../assets/img/svg/svg';

type Props = {
}

export default function TopButtons(props: Props) {
  const [volumeIsActive, setVolumeIsActive] = useState<boolean>(false)
  const [snowIsActive, setSnowIsActive] = useState<boolean>(false)

  const handleChange = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      e.currentTarget.classList.contains('volume') ? setVolumeIsActive(false) : setSnowIsActive(false)

    } else {
      e.currentTarget.classList.add('active');
      e.currentTarget.classList.contains('volume') ? setVolumeIsActive(true) : setSnowIsActive(true)
    }
  }

  return (
    <div className='column-left__top-buttons'>
      <div className='column-left-wrap'>
        <div className='top-buttons-container'>
          <button id='volumeBtn' className='top-buttons__button volume' onClick={handleChange}>
            {!volumeIsActive ? <img className="top-buttons__img" src={SvgImages.mute} alt="audio" />
              : <img className="top-buttons__img" src={SvgImages.audio} alt="audio" />}
          </button>
          <button className='top-buttons__button snow' onClick={handleChange}>
            {!snowIsActive ? <img className="top-buttons__img" src={SvgImages.snow} alt="snow" />
              : <img className="top-buttons__img" src={SvgImages.snow} alt="snow" />}
          </button>
        </div>
      </div>
    </div>
  );
}
