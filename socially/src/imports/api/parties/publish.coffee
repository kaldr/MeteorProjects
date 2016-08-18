{Meteor}=require 'meteor/meteor'
{Parties}=require './collection'
{Counts}=require 'meteor/tmeasday:publish-counts'

if Meteor.isServer
  Meteor.publish 'parties',(options,searchString)->
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
    if typeof searchString =='string' and searchString.length
      selector.name={
        $regex:///.*${searchString}.*///,
        $options:'i'
      }
    Counts.publish this,'numberOfParties',Parties.find(selector),{noReady:true}
    Parties.find selector,options
