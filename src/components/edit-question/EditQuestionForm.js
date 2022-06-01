import { useEffect, useState } from "react";

import { ButtonDelete } from "../common/Button";
import {
  InputField,
  InputFieldGroup,
  SelectOption,
} from "../common/InputField";

function EditQuestionForm(props) {
  //inherited props
  const index = props.index;
  const question = props.question;
  const deleteQuestion = props.deleteQuestion;
  const editQuestion = props.editQuestion;

  //own props
  const [formData, setFormData] = useState({
    type_of_question: question.type_of_question,
    text: question.text,
    option: question.option || [],
  });

  const handleInputChange = (e) => {
    // {type_of_question, text, option}
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    editQuestion(name, value, index);
  };

  const handleInputGroupChange = (e) => {
    const target = e.target;
    const value = target.value;
    const i = parseInt(target.name);
    const option = formData.option;

    option[i] = value;

    const newFormData = { ...formData, option };
    setFormData(newFormData);
    editQuestion("option", option, index);
    console.log("new option: " + option);
  };

  return (
    <div className="formComponent column spaceBetween padded rounded white">
      <InputField
        name={"text"}
        value={formData.text}
        onChange={handleInputChange}
      />
      <div className="formComponent row spaceBetween noMarginBottom marginTop">
        <SelectOption
          name={"type_of_question"}
          value={formData.type_of_question}
          onChange={handleInputChange}
        />
        <ButtonDelete onClick={deleteQuestion} idToDelete={question._id} />
      </div>
      {formData.type_of_question === "multiple" && (
        <InputFieldGroup
          index={index}
          name={"option"}
          values={formData.option}
          onChange={handleInputGroupChange}
        />
      )}
    </div>
  );
}

export { EditQuestionForm };
