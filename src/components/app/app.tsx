import React, { Component, Fragment } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

class App extends Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }

  // public start() {

  // }
}

export default App;
