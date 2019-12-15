'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function EntityInput(Props) {
  var dispatch = Props.dispatch;
  var entityType = Props.entityType;
  var match = React.useState((function () {
          return "";
        }));
  var setInputValue = match[1];
  var inputValue = match[0];
  var onChange = function (e) {
    var $$event = e.target;
    return Curry._1(setInputValue, $$event.value);
  };
  var onKeyDown = function (e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
      Curry._1(dispatch, /* AddEntity */[
            inputValue,
            entityType
          ]);
      return Curry._1(setInputValue, (function (param) {
                    return "";
                  }));
    } else {
      return 0;
    }
  };
  return React.createElement("input", {
              value: inputValue,
              onKeyDown: onKeyDown,
              onChange: onChange
            });
}

var make = EntityInput;

exports.make = make;
/* react Not a pure module */
