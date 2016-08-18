var UninvitedFilterFunc, _, angular, name;

angular = require('angular');

_ = require('underscore');

name = 'uninvitedFilter';

UninvitedFilterFunc = function(users, party) {
  if (!party) {
    return false;
  }
  return users.filter((function(_this) {
    return function(user) {
      return user._id !== party.owner && !_.contains(party.invited, user._id);
    };
  })(this));
};

exports.UninvitedFilter = angular.module(name, []).filter(name, (function(_this) {
  return function() {
    return UninvitedFilterFunc;
  };
})(this)).name;
