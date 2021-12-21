import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './nav.scss';

type Props = {
  pageName: string;
  active: boolean;
  handleChangeActive: Dispatch<SetStateAction<string>>;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  favoriteToys: number;
};

export default function NavItem({ pageName, active, handleChangeActive, setFavoriteToys, favoriteToys }: Props) {
  const handleChange = () => {
    handleChangeActive(pageName);
    if (pageName !== 'игрушки') {
      setFavoriteToys((favoriteToys = 0));
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
