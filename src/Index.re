module App = {
  let initialState: State.state = {
    entities: [],
    selectedItem: None,
    selectedBox: None,
  };

  [@react.component]
  let make = () => {
    let (state, dispatch) = React.useReducer(State.reducer, initialState);
    <Panel dispatch entities={state.entities} entityType={State.Page} />;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");