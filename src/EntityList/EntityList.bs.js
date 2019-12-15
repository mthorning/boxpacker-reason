'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Entity$ReasonReactExamples = require("../Entity/Entity.bs.js");

function EntityList(Props) {
  var entities = Props.entities;
  var entityType = Props.entityType;
  var dispatch = Props.dispatch;
  var match = React.useState((function () {
          return ;
        }));
  var setEdit = match[1];
  var edit = match[0];
  var match$1 = List.length(entities);
  if (match$1 !== 0) {
    var listOfType = List.filter((function (entity) {
              return entity.parent === entityType;
            }))(entities);
    var elementList = $$Array.of_list(List.map((function (entity) {
                return React.createElement(Entity$ReasonReactExamples.make, {
                            dispatch: dispatch,
                            entity: entity,
                            setEdit: setEdit,
                            edit: edit
                          });
              }), listOfType));
    return React.createElement("div", undefined, elementList);
  } else {
    return null;
  }
}

var make = EntityList;

exports.make = make;
/* react Not a pure module */
