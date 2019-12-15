[@react.component]
let make = (~entities, ~entityType, ~dispatch) => {
  let (edit, setEdit) = React.useState(_ => None);
  switch (List.length(entities)) {
  | 0 => ReasonReact.null
  | _ =>
    let listOfType =
      List.filter(
        (entity: State.entity) => entity.parent === entityType,
        entities,
      );
    let elementList =
      List.map(entity => <Entity dispatch entity edit setEdit />, listOfType)
      ->Array.of_list
      ->React.array;

    <div> elementList </div>;
  };
};