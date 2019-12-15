[@react.component]
let make = (~dispatch, ~entity: State.entity, ~setEdit, ~edit) => {
  let dblClick = ref(false);
  let onClick = _e => {
    dblClick^
      ? {
        setEdit(_ => Some(entity.id))->ignore;
      }
      : {
        dblClick := true;
        Js.Global.setTimeout(_ => dblClick := false, 200)->ignore;
      };
  };

  <div key={entity.id}>
    {switch (edit) {
     | Some(id) when id === entity.id =>
       <input key={entity.id} placeholder={entity.name} />
     | _ => <div onClick> entity.name->React.string </div>
     }}
  </div>;
};