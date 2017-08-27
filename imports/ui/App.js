import React from 'react';

import NavBar from './NavBar';
import AddClients from './AddClients';
import FrontPage from './FrontPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <FrontPage/>
        <AddClients/>
      </div>
    );
  }
};
