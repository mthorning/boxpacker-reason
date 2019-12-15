'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Entity(Props) {
  Props.dispatch;
  var entity = Props.entity;
  var setEdit = Props.setEdit;
  var edit = Props.edit;
  var dblClick = {
    contents: false
  };
  var onClick = function (_e) {
    var match = dblClick.contents;
    if (match) {
      Curry._1(setEdit, (function (param) {
              return entity.id;
            }));
      return /* () */0;
    } else {
      dblClick.contents = true;
      setTimeout((function (param) {
              dblClick.contents = false;
              return /* () */0;
            }), 200);
      return /* () */0;
    }
  };
  var tmp;
  var exit = 0;
  if (edit !== undefined && edit === entity.id) {
    tmp = React.createElement("input", {
          key: entity.id,
          placeholder: entity.name
        });
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement("div", {
          onClick: onClick
        }, entity.name);
  }
  return React.createElement("div", {
              key: entity.id
            }, tmp);
}

var make = Entity;

exports.make = make;
/* react Not a pure module */
