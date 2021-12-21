import * as React from 'react';
import { SetStateAction, Dispatch } from 'react';
import './header.scss';

import Nav from './nav-link/nav';

type Props = {
  activePage: string;
  handleChangeActive: Dispatch<SetStateAction<string>>;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  favoriteToys: number;
};

export default function Header({ activePage, handleChangeActive, setFavoriteToys, favoriteToys }: Props) {
  return (
    <header id="Top" className="header">
      <Nav
        activePage={activePage}
        handleChangeActive={handleChangeActive}
        setFavoriteToys={setFavoriteToys}
        favoriteToys={favoriteToys}
      />
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
