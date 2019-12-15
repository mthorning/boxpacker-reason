open Css;
let container =
  style([
    maxWidth(px(300)),
    border(px(1), solid, grey),
    minHeight(px(500)),
    display(flexBox),
    flexDirection(column),
    alignItems(stretch),
    padding(px(8)),
  ]);
[@react.component]
let make = (~entities, ~dispatch, ~entityType) => {
  <div className=container>
    <EntityInput dispatch entityType />
    <EntityList dispatch entityType entities />
  </div>;
};