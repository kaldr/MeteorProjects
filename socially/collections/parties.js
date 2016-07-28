import {Mongo} from 'meteor/mongo';
var Parties;

Parties = new Mongo.Collection('parties');

export default Parties;
