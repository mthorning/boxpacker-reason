'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var EntityList$ReasonReactExamples = require("../EntityList/EntityList.bs.js");
var EntityInput$ReasonReactExamples = require("../EntityInput/EntityInput.bs.js");

var container = Css.style(/* :: */[
      Css.maxWidth(Css.px(300)),
      /* :: */[
        Css.border(Css.px(1), Css.solid, Css.grey),
        /* :: */[
          Css.minHeight(Css.px(500)),
          /* :: */[
            Css.display(Css.flexBox),
            /* :: */[
              Css.flexDirection(Css.column),
              /* :: */[
                Css.alignItems(Css.stretch),
                /* :: */[
                  Css.padding(Css.px(8)),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function Panel(Props) {
  var entities = Props.entities;
  var dispatch = Props.dispatch;
  var entityType = Props.entityType;
  return React.createElement("div", {
              className: container
            }, React.createElement(EntityInput$ReasonReactExamples.make, {
                  dispatch: dispatch,
                  entityType: entityType
                }), React.createElement(EntityList$ReasonReactExamples.make, {
                  entities: entities,
                  entityType: entityType,
                  dispatch: dispatch
                }));
}

var make = Panel;

exports.container = container;
exports.make = make;
/* container Not a pure module */
