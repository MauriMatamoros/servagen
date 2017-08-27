import React from 'react';

import addClients from './addClients';
import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <addClients/>
      </div>
    );
  }
};
