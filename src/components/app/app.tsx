import React, { Component, Fragment, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import toysData from '../../assets/data/data';

const App = () => {
  const [activePage, setActivePage] = useState('игрушки');
  const filters = useState({
    search: '',
    sorting: 'By title(A-Z)',
  })
  const [favoriteToys, setFavoriteToys] = useState(0)

  return (
    <Fragment>
      <Header activePage={activePage} handleChangeActive={setActivePage} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys} />
      <Main activePage={activePage} toysData={toysData} favoriteToys={favoriteToys} setFavoriteToys={setFavoriteToys} />
      <Footer />
    </Fragment>
  );
};

export default App;
