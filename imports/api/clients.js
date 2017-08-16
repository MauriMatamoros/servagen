import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Clients = new Mongo.Collection('clients');

Meteor.methods({
  'clients.insert'(client) {

    Clients.insert({
      email: client.email,
      name: client.name,
      cellphoneNumber: client.cellphoneNumber,
      age: client.age
    });
  }
});
