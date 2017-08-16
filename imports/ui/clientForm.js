import React from 'react';

export default class clientForm extends React.Component {
  render() {
    return(
      <form >
        <input type="email" ref="email" name="email" placeholder="Email"/>
        <input type="text" ref="name" name="name" placeholder="Nombre"/>
        <input type="text" ref="cellphoneNumber" name="cellphoneNumber" placeholder="Celular"/>
        <input type="text" ref="age" name="age" placeholder="Edad"/>
        <button>mantengase informado</button>
      </form>
    );
  };
};
