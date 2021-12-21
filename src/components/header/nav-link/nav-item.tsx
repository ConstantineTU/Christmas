import * as React from 'react';
import { Component, Fragment, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

type Props = {
  pageName: string;
  active: boolean;
  handleChangeActive: Dispatch<React.SetStateAction<string>>;
  setFavoriteToys: Dispatch<React.SetStateAction<number>>;
  favoriteToys: number;
};

export default function NavItem({ pageName, active, handleChangeActive, setFavoriteToys, favoriteToys }: Props) {
  const handleChange = () => {
    handleChangeActive(pageName);
    if (pageName !== 'игрушки') {
      setFavoriteToys(favoriteToys = 0)
    }
  };

  return (
    <li className="nav__item">
      <a className={active ? 'nav__link active' : 'nav__link'} href={`#${pageName}`} onClick={handleChange}>
        {pageName.toUpperCase()}
      </a>
    </li>
  );
}
