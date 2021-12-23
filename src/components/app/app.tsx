import React, { Fragment, useState, useEffect } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import toysData from '../../assets/data/data';

const App = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    const saved = localStorage.getItem('activePage');
    const initialValue = saved ? saved : undefined;
    return initialValue || 'игрушки';
  });
  const [selectedToys, setSelectedToys] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('selectedToys');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || [];
  });

  const [favoriteToys, setFavoriteToys] = useState<number>(() => {
    const saved = localStorage.getItem('favoriteToys');
    const initialValue = saved ? Number(saved) : undefined;
    return initialValue || 0;
  });
  useEffect(() => {
    localStorage.setItem('selectedToys', selectedToys.join());
    localStorage.setItem('favoriteToys', String(favoriteToys));
  }, [selectedToys.length]);
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

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
