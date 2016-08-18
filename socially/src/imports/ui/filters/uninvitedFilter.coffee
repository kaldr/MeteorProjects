angular=require 'angular'
_=require 'underscore'
name='uninvitedFilter'
UninvitedFilterFunc=(users,party)->
    if not party
        return false
    return users.filter (user)=> user._id != party.owner and not _.contains party.invited,user._id

exports.UninvitedFilter=angular.module name,[]
    .filter name,()=>UninvitedFilterFunc
    .name
