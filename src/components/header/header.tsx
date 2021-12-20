import * as React from 'react';
import { Component, Fragment, Dispatch } from 'react';
import './header.scss';


import Nav from './nav-link/nav'

type Props = {
  activePage: string
  handleChangeActive: Dispatch<React.SetStateAction<string>>
}

export default function Header({ activePage, handleChangeActive }: Props) {
  return (
    <header id="Top" className="header">
      <Nav activePage={activePage} handleChangeActive={handleChangeActive} />
    </header>
  );
}


// import NavLink from './nav-link/nav-link';

// class Header extends Component {
//   render(): React.ReactNode {
//     return (
//       <header id="Top" className="header">
//         <NavLink />
//       </header>
//     );
//   }
// }

// export default Header;