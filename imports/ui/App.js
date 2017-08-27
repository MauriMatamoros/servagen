import React from 'react';

import ClientForm from './ClientForm';
import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <ClientForm/>
      </div>
    );
  }
};
