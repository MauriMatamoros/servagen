import React from 'react';

import NavBar from './NavBar';
import AddClients from './AddClients';

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
