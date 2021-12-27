import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

type Props = {};

export default function BottomButtons(props: Props) {
  return (
    <div className="bottom-buttons column-section">
      <div className="column-left-wrap">
        <div className="bottom-buttons-container">
          <button className="bottom-buttons__button save">Сохранить</button>
          <button className="bottom-buttons__button reset">Сбросить настройки</button>
        </div>
      </div>
    </div>
  );
}
