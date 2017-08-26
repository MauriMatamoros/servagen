import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Clients } from '../api/clients';

export default class clientForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let firstName = this.refs.firstName.value.trim();
    let lastName = this.refs.lastName.value.trim();
    let cellphoneNumber = this.refs.cellphoneNumber.value.trim();
    let age = parseInt(this.refs.age.value.trim());

    let client = {
      email,
      firstName,
      lastName,
      cellphoneNumber,
      age
    }

    if (email && firstName && cellphoneNumber) {
      Meteor.call('clients.insert', client);
      this.refs.email.value = '';
      this.refs.firstName.value = '';
      this.refs.lastName.value = '';
      this.refs.cellphoneNumber.value = '';
      this.refs.age.value = '';
    }
  };
  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="email" name="email" placeholder="Email"/>
        <input type="text" ref="firstName" name="firstName" placeholder="Nombre"/>
        <input type="text" ref="lastName" name="lastName" placeholder="Apellido"/>
        <input type="text" ref="cellphoneNumber" name="cellphoneNumber" placeholder="Celular"/>
        <input type="text" ref="age" name="age" placeholder="Edad"/>
        <button className="btn btn-primary" >mantengase informado</button>
      </form>
    );
  };
};
