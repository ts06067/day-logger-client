import { useEffect, useState } from "react";

import {
  InputFieldLogDayNumber,
  InputFieldLogDayBoolean,
  InputFieldLogDayText,
  InputFieldLogDayMultipleChoice,
} from "../common/InputField";

function LogDayForm(props) {
  const data = props.data;
  const date = props.date;

  const type = data.type;
  const text = data.text;
  const optionArr = data.optionArr;

  const [logResponse, setLogResponse] = useState(data.logResponse || ""); //user answer to the question

  const onChange = (e) => {
    const className = e.target.className;
    const newInput = e.target.value;

    if (className === "logResponse") {
      setLogResponse(newInput);
    }
  };

  const render = () => {
    switch (type) {
      case "number":
        return (
          <InputFieldLogDayNumber value={logResponse} onChange={onChange} />
        );

      case "boolean":
        return (
          <InputFieldLogDayBoolean value={logResponse} onChange={onChange} />
        );

      case "text":
        return <InputFieldLogDayText value={logResponse} onChange={onChange} />;

      case "multiple":
        return (
          <InputFieldLogDayMultipleChoice
            value={logResponse}
            onChange={onChange}
          />
        );

      default:
        break;
    }
  };

  return (
    <div className="formComponentItemsColumn">
      {text}
      {render()}
    </div>
  );
}

export { LogDayForm };
