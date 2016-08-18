var DisplayNameFilterFunc, angular, name;

angular = require('angular');

name = 'displayNameFilter';

DisplayNameFilterFunc = function(user) {
  if (!user) {
    return "";
  }
  if (user.profile && user.profile.name) {
    return user.profile.name;
  }
  if (user.emails) {
    return user.emails[0].address;
  }
  return user;
};

exports.DisplayNameFilter = angular.module(name, []).filter(name, (function(_this) {
  return function() {
    return DisplayNameFilterFunc;
  };
})(this)).name;
