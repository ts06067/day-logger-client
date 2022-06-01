import { useState } from "react";

import { parseUniqueName } from "../../utils/helper";

import { InputFieldByType } from "../common/InputField";

function LogDayForm(props) {
  //inherited props
  const index = props.index;
  const question = props.question;
  const answer = props.answer;
  const editLoggedData = props.editLoggedData;

  //own props
  const [formData, setFormData] = useState({
    type_of_question: question.type_of_question,
    text: question.text,
    option: question.option || [],
    answer,
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const newFormData = { ...formData, [parseUniqueName(name)]: value };
    setFormData(newFormData);
    editLoggedData(name, value, index);
  };

  return (
    <div className="formComponent column padded rounded white">
      <span>{formData.text}</span>
      <InputFieldByType
        index={index}
        type_of_question={formData.type_of_question}
        name={"answer"}
        value={formData.answer}
        option={formData.option}
        onChange={handleInputChange}
      />
    </div>
  );
}

export { LogDayForm };
