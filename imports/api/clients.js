import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Clients = new Mongo.Collection('clients');

Meteor.methods({
  'clients.insert'(client) {

    const clientSchema = new SimpleSchema({
      email: {
        type: String,
        label: 'Client email address',
        regEx: SimpleSchema.RegEx.Email
      }, firstName: {
        type: String,
        min: 1,
        max: 15,
      }, lastName: {
        type: String,
        min: 1,
        max: 15,
      }, cellphoneNumber: {
        type: String,
        label: 'Client cellphone number',
        regEx: SimpleSchema.RegEx.Phone
      }, age: {
        type: Number,
        min: 0
      }
    });

    clientSchema.validate({
      email: client.email,
      firstName: client.firstName,
      lastName: client.lastName,
      cellphoneNumber: client.cellphoneNumber,
      age: client.age
    });


    Clients.insert({
      email: client.email,
      firstName: client.firstName,
      lastName: client.lastName,
      cellphoneNumber: client.cellphoneNumber,
      age: client.age
    });
  }
});
