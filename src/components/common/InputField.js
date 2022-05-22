import "./css/FormComponent.css";

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
  InputFieldGeneral,
  InputFieldLogDayNumber,
  InputFieldLogDayBoolean,
  InputFieldLogDayText,
  InputFieldLogDayMultipleChoice,
  InputFieldQuestionMultipleChoice,
};
