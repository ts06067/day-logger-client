import { useState } from "react";

import { InputField } from "../common/InputField";

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
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    editLoggedData(name, value, index);
  };

  return (
    <div className="formComponentItemsColumn">
      <label>{formData.text}</label>
      <InputField
        name={"answer"}
        value={formData.answer}
        onChange={handleInputChange}
      />
    </div>
  );
}

export { LogDayForm };
