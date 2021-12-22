import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './nav.scss';

type Props = {
  pageName: string;
  active: boolean;
  handleChangeActive: Dispatch<SetStateAction<string>>;
};

export default function NavItem({ pageName, active, handleChangeActive }: Props) {
  const handleChange = () => {
    handleChangeActive(pageName);
  };

  return (
    <li className="nav__item">
      <a className={active ? 'nav__link active' : 'nav__link'} href={`#${pageName}`} onClick={handleChange}>
        {pageName.toUpperCase()}
      </a>
    </li>
  );
}
