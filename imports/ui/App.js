import React from 'react';

import AddClients from './AddClients';
import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <AddClients/>
      </div>
    );
  }
};
