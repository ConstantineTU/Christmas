import * as React from 'react';
import { Dispatch } from 'react';
import './nav.scss';
// import { Link } from 'react-router-dom'
import NavItem from './nav-item';

type Props = {
  activePage: string;
  handleChangeActive: Dispatch<React.SetStateAction<string>>;
  setFavoriteToys: Dispatch<React.SetStateAction<number>>;
  favoriteToys: number;
};

export default function Nav({ activePage, handleChangeActive, setFavoriteToys, favoriteToys }: Props) {
  const pages = ['домашняя', 'игрушки', 'ёлка'];

  return (
    <ul className="nav">
      {pages.map((pageName, index) => (
        <NavItem
          pageName={pageName}
          key={index}
          active={activePage === pageName}
          handleChangeActive={handleChangeActive}
          setFavoriteToys={setFavoriteToys}
          favoriteToys={favoriteToys}
        />
      ))}
    </ul>
  );
}

// const AppLink = (props) => ({
//   render: () => (
//     <Link to={...props} activeClassName="active" />
//   ),
// });

// class Nav extends Component {
//   render(): React.ReactNode {
//     return (
//       <nav>
//         <ul id="nav" className="nav">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/filters">Filters</Link></li>
//           <li><Link to="/tree">Tree</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Nav;
