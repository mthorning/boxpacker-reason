'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Panel$ReasonReactExamples = require("./Panel/Panel.bs.js");
var State$ReasonReactExamples = require("./State.bs.js");

var initialState = {
  entities: /* [] */0,
  selectedItem: undefined,
  selectedBox: undefined
};

function Index$App(Props) {
  var match = React.useReducer(State$ReasonReactExamples.reducer, initialState);
  return React.createElement(Panel$ReasonReactExamples.make, {
              entities: match[0].entities,
              dispatch: match[1],
              entityType: /* Page */0
            });
}

var App = {
  initialState: initialState,
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.App = App;
/*  Not a pure module */
