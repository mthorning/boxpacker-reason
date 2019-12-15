[@react.component]
let make = (~dispatch, ~entityType) => {
  let (inputValue, setInputValue) = React.useState(_ => "");
  let onChange = e => {
    let event = e->ReactEvent.Form.target;
    setInputValue(event##value);
  };

  let onKeyDown = e => {
    let keyCode = e->ReactEvent.Keyboard.keyCode;
    if (keyCode === 13) {
      dispatch(State.AddEntity(inputValue, entityType));
      setInputValue(_ => "");
    };
  };

  <input onChange onKeyDown value=inputValue />;
};