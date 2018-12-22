import React, { Component, Fragment } from 'react';
import Header from './components/layouts/header';
import Pages from './components/pages/index';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
        <Pages />
        </div>

      </Fragment>
    );
  }
}

export default App;
