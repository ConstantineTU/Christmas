import React, { Component, Fragment, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import toysData from '../../assets/data/data'


const App = () => {
  const [activePage, setActivePage] = useState('игрушки')

  return (
    <Fragment>
      <Header activePage={activePage} handleChangeActive={setActivePage} />
      <Main activePage={activePage} toysData={toysData} />
      <Footer />
    </Fragment>
  )
}



export default App;
