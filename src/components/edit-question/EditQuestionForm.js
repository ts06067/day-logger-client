import { useEffect, useState } from "react";

import { ButtonDeleteQuestion } from "../common/Button";
import {
  InputField,
  SelectOption,
  InputFieldQuestionMultipleChoice,
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

  return (
    <div className="formComponentItemsColumn">
      <InputField
        name={"text"}
        value={formData.text}
        onChange={handleInputChange}
      />
      <div className="formComponentItemsRow">
        <SelectOption
          name={"type_of_question"}
          value={formData.type_of_question}
          onChange={handleInputChange}
        />
        <ButtonDeleteQuestion
          onClick={deleteQuestion}
          idToDelete={question._id}
        />
      </div>
    </div>
  );
}

export { EditQuestionForm };
