{Meteor}=require 'meteor/meteor'
{Parties}=require '../imports/api/parties/index'
Meteor.startup ()=>
    if Parties.find().count()==0
        parties= [{
            'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep.'
            }, {
                'name': 'All dubstep all the time',
                'description': 'Get it on!'
            }, {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.'
            }]

        parties.forEach (party)=>Parties.insert party
