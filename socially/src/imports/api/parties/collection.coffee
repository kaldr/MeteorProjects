{Mongo}=require 'meteor/mongo'
Parties=new Mongo.Collection 'parties'

Parties.allow {
  insert:(userId,party)->userId and party.owner==userId
  update:(userId,party,fileds,modifier)->userId and party.owner==userId
  remove:(userId,party)->userId and party.owner==userId
}
exports.Parties=Parties
