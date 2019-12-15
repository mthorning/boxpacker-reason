'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

function reducer(state, action) {
  var name = action[0];
  var created = Date.now();
  var id = name + created.toString();
  var newEntity_parent = action[1];
  var newEntity = {
    id: id,
    parent: newEntity_parent,
    name: name,
    created: created
  };
  return {
          entities: Pervasives.$at(state.entities, /* :: */[
                newEntity,
                /* [] */0
              ]),
          selectedItem: state.selectedItem,
          selectedBox: state.selectedBox
        };
}

exports.reducer = reducer;
/* No side effect */
