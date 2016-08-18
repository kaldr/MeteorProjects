angular=require 'angular'
name='displayNameFilter'

DisplayNameFilterFunc=(user)->
    return "" if not user
    return user.profile.name if user.profile and user.profile.name
    return user.emails[0].address if user.emails
    user

exports.DisplayNameFilter=angular.module name,[]
    .filter name,()=>DisplayNameFilterFunc
    .name
