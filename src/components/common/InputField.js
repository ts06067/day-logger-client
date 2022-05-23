import "../common/css/FormComponent.css";

//general text input field
function InputField(props) {
  const name = props.name;
  const value = props.value;
  const onChange = props.onChange;

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={"Enter Question..."}
    />
  );
}

//input field of var. types (number, boolean, text, multiple)
function InputFieldByType(props) {
  const name = props.name;
  const value = props.value;
  const onChange = props.onChange;
}

function InputFieldGroup(props) {
  //inherited props
  const index = props.index;
  const name = props.name;
  let values = props.values; //option arr
  const onChange = props.onChange;

  values = [
    values[0] || "",
    values[1] || "",
    values[2] || "",
    ...values.splice(3),
  ];

  const renderedInputs = values.map((v, i) => (
    <input
      key={name && index && i}
      name={i}
      value={v}
      onChange={onChange}
      placeholder={"Enter Text..."}
    />
  ));

  return <div className="formComponentItemsColumn">{renderedInputs}</div>;
}

//select type_of_question
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
  InputFieldGroup,
  SelectOption,
  InputFieldGeneral,
  InputFieldLogDayNumber,
  InputFieldLogDayBoolean,
  InputFieldLogDayText,
  InputFieldLogDayMultipleChoice,
  InputFieldQuestionMultipleChoice,
};
