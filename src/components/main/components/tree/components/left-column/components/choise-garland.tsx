import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {
}

export default function Garland(props: Props) {
  const handleChange = (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      // e.currentTarget.classList.contains('volume') ? setVolumeIsActive(false) : setSnowIsActive(false)

    } else {
      e.currentTarget.classList.add('active');
      // e.currentTarget.classList.contains('volume') ? setVolumeIsActive(true) : setSnowIsActive(true)
    }
  }

  return (
    <div className='garland column-section'>
      <div className='column-left-wrap'>
        <h3 className='column-left__title'>Выберете гирлянду</h3>
        <div className='garland-container'>
          <div className="garland-buttons-container">
            <button className='garland__button multicolor'></button>
            <button className='garland__button red'></button>
            <button className='garland__button blue'></button>
            <button className='garland__button yellow'></button>
            <button className='garland__button green'></button>
            <button className='garland__button-on' onClick={handleChange}></button>
          </div>
        </div>
      </div>
    </div>
  );
}
