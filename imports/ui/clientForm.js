import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Clients } from '../api/clients';

export default class clientForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let name = this.refs.name.value.trim();
    let cellphoneNumber = this.refs.cellphoneNumber.value.trim();
    let age = this.refs.age.value.trim();

    let client = {
      email,
      name,
      cellphoneNumber,
      age
    }

    if (email && name && cellphoneNumber) {
      Meteor.call('clients.insert', client);
      this.refs.email.value = '';
      this.refs.name.value = '';
      this.refs.cellphoneNumber.value = '';
      this.refs.age.value = '';
    }
  };
  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="email" ref="email" name="email" placeholder="Email"/>
        <input type="text" ref="name" name="name" placeholder="Nombre"/>
        <input type="text" ref="cellphoneNumber" name="cellphoneNumber" placeholder="Celular"/>
        <input type="text" ref="age" name="age" placeholder="Edad"/>
        <button>mantengase informado</button>
      </form>
    );
  };
};
