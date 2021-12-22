import React, { Fragment, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import toysData from '../../assets/data/data';

const App = () => {
  const [activePage, setActivePage] = useState('игрушки');
  const [selectedToys, setSelectedToys] = useState([]);

  const [favoriteToys, setFavoriteToys] = useState(0);

  return (
    <Fragment>
      <Header activePage={activePage} handleChangeActive={setActivePage} />
      <Main
        activePage={activePage}
        toysData={toysData}
        favoriteToys={favoriteToys}
        setFavoriteToys={setFavoriteToys}
        selectedToys={{ value: selectedToys, setValue: setSelectedToys }}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
