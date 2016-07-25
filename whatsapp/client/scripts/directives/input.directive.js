import {Directive} from 'angular-ecmascript/module-helpers';;
var InputDirective,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

InputDirective = (function(superClass) {
  extend(InputDirective, superClass);

  function InputDirective() {
    var _arguments;
    _arguments = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this["arguments"] = _arguments;
    this.link = bind(this.link, this);
    InputDirective.__super__.constructor.apply(this, this["arguments"]);
    this.restrict = "E";
    this.scope = {
      'returnClose': "=",
      'onReturn': "&",
      'onFocus': '&',
      'onBlur': '&'
    };
  }

  InputDirective.prototype.link = function(scope, element) {
    element.bind('focus', (function(_this) {
      return function(e) {
        if (!scope.onFocus) {
          return;
        }
        return _this.$timeout(function() {
          return scope.onFocus();
        });
      };
    })(this));
    element.bind('blur', (function(_this) {
      return function(e) {
        if (!scope.onBlur) {
          return;
        }
        return _this.$timeout(function() {
          return scope.onBlur();
        });
      };
    })(this));
    return element.bind("keydown", (function(_this) {
      return function(e) {
        if (e.which !== 13) {
          return;
        }
        if (scope.returnClose) {
          element[0].blur();
        }
        if (scope.onReturn) {
          return _this.$timeout(function() {
            return scope.onReturn();
          });
        }
      };
    })(this));
  };

  return InputDirective;

})(Directive);

InputDirective.$name = 'input';

InputDirective.$inject = ["$timeout"];

export default InputDirective;
