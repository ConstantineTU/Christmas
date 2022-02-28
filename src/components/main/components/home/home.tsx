import * as React from 'react';
import { Fragment } from 'react';
import './home.scss';

type Props = {
  activePage: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
};

export default function Home(props: Props) {
  const handleChangeActive = () => {
    props.activePage.setValue('игрушки');
  };

  return (
    <Fragment>
      <div className="home-wrap">
        <div className="home-ball-one"></div>
        <div className="home-ball-two"></div>
        <div className="home-title-container">
          <h1 className="home-title">Помогите бабушке нарядить ёлку</h1>
        </div>
        <button className="home-button" onClick={handleChangeActive}>
          Начать
        </button>
      </div>
    </Fragment>
  );
}
