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
      placeholder={"Enter..."}
    />
  );
}

function InputFieldImage(props) {
  const name = props.name;
  const onChange = props.onChange;

  return (
    <>
      <input
        name={name}
        onChange={onChange}
        id="inputImg"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="inputImg">Choose New Image</label>
    </>
  );
}

//input field of var. types (number, boolean, text, multiple)
function InputFieldByType(props) {
  //inherited props
  const index = props.index;
  const type_of_question = props.type_of_question;
  const name = props.name;
  const value = props.value;
  const option = props.option;
  const onChange = props.onChange;

  //own props
  const uniqueName = name + "-" + Math.random();

  switch (type_of_question) {
    case "number":
      return (
        <input type="number" name={name} value={value} onChange={onChange} />
      );
    case "boolean":
      const booleanSet = ["true", "false"];
      return booleanSet.map((b, i) => (
        <label key={"lb" + name + index + i}>
          <input
            key={"b" + name + index + i}
            type="radio"
            checked={value === b}
            name={uniqueName}
            value={b}
            onChange={onChange}
          ></input>
          {b}
        </label>
      ));
    case "text":
      return <InputField name={name} value={value} onChange={onChange} />;
    case "multiple":
      return option.map((op, i) => (
        <label key={"lm" + name + index + i}>
          <input
            key={"m" + name + index + i}
            type="radio"
            checked={value === op}
            name={uniqueName}
            value={op}
            onChange={onChange}
          ></input>
          {op}
        </label>
      ));

    default:
      break;
  }
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
  InputFieldImage,
  InputFieldByType,
  InputFieldGroup,
  SelectOption,
  InputFieldGeneral,
  InputFieldLogDayNumber,
  InputFieldLogDayBoolean,
  InputFieldLogDayText,
  InputFieldLogDayMultipleChoice,
  InputFieldQuestionMultipleChoice,
};
