import "./css/FormComponent.css";

function InputField(props) {
  const name = props.name;
  const value = props.value;
  const onChange = props.onChange;

  return <input name={name} defaultValue={value} onChange={onChange} />;
}

function SelectOption(props) {
  //inherited props
  const name = props.name;
  const value = props.value;
  const onChange = props.onChange;

  //own props
  const options = ["number", "boolean", "text", "multiple"];
  const renderedOptions = options.map((op) => (
    <option key={Math.random()} value={op}>
      {op}
    </option>
  ));

  return (
    <select name={name} value={value} onChange={onChange}>
      {renderedOptions}
    </select>
  );
}

function InputFieldGeneral(props) {
  const type = props.type;
  return <input id={type} />;
}

function InputFieldLogDayNumber(props) {
  const value = props.value;
  const onChange = props.onChange;

  return <input value={value} onChange={onChange} className="logResponse" />;
}

function InputFieldLogDayBoolean(props) {
  return <input className="logResponse" />;
}

function InputFieldLogDayText(props) {
  return <input className="logReponse" />;
}

function InputFieldLogDayMultipleChoice(props) {
  return <input className="logResponse" />;
}

function InputFieldQuestionMultipleChoice(props) {
  const id = props.id;
  const onChange = props.onChange;

  return (
    <div className="formComponentItemsRowSmall">
      O
      <input onChange={onChange} className="questionOption" id={id} />
    </div>
  );
}

export {
  InputField,
  SelectOption,
  InputFieldGeneral,
  InputFieldLogDayNumber,
  InputFieldLogDayBoolean,
  InputFieldLogDayText,
  InputFieldLogDayMultipleChoice,
  InputFieldQuestionMultipleChoice,
};
