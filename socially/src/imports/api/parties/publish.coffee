{Meteor}=require 'meteor/meteor'
{Parties}=require './collection'

if Meteor.isServer
  Meteor.publish 'parties',()->
    selector=
      $or:
        [
          {
            $and:[
              {
                public:true
              },{
                  public:
                    $exists:true
                }]
          },{
            $and:[
              {
                owner:this.userId
              },
              {
              owner:
                $exists:true
              }]
          }
        ]
    Parties.find selector
