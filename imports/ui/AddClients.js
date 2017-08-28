import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Clients } from '../api/clients';

export default class AddClients extends React.Component {
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
      <div className="jumbotron">
        <div className="row text-center">
          <h4>Mantente Informado</h4>
          <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"></span>
                <input type="text" className="form-control" ref="email" name="email" placeholder="Correo Electronico" aria-describedby="sizing-addon2"/>
              </div>
              <br></br>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"></span>
                <input type="text" className="form-control" ref="firstName" name="firstName" placeholder="Nombre" aria-describedby="sizing-addon2"/>
              </div>
              <br></br>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"></span>
                <input type="text" className="form-control" ref="lastName" name="lastName" placeholder="Apellido" aria-describedby="sizing-addon2"/>
              </div>
              <br></br>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"></span>
                <input type="text" className="form-control" ref="cellphoneNumber" name="cellphoneNumber" placeholder="Celular" aria-describedby="sizing-addon2"/>
              </div>
              <br></br>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"></span>
                <input type="text" className="form-control" ref="age" name="age" placeholder="Edad" aria-describedby="sizing-addon2"/>
              </div>
              <br></br>
              <div className="row">
                <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-offset-3 col-xs-6">
                  <div className="text-center">
                    <button className="btn btn-primary btn-md btn-block">¡Informate!</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
};
