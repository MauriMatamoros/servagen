import React from 'react';

import NavBar from './NavBar';
import AddClients from './AddClients';
import FrontPage from './FrontPage';
import Services from './Services';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <FrontPage/>
        <Services/>
        <AddClients/>
      </div>
    );
  }
};
