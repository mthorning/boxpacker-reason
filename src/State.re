type id = string;
type parent = | Page | Box(id);
type entity = {
  id: id,
  parent: parent,
  name: string,
  created: float,
};

type state = {
  entities: list(entity),
  selectedItem: option(id),
  selectedBox: option(id),
};

type action =
  | AddEntity(string, parent);

let reducer = (state, action) => {
  switch (action) {
  | AddEntity(name, parent) =>
    let created = Js.Date.now();
    let id = name ++ Js.Float.toString(created);
    let newEntity: entity = {name, parent, id, created};
    {...state, entities: state.entities @ [newEntity]};
  };
};