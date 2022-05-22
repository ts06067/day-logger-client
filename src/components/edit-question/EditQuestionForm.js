import { useEffect, useState } from "react";

import { ButtonDeleteQuestion } from "../common/Button";
import { InputFieldQuestionMultipleChoice } from "../common/InputField";

function EditQuestionForm(props) {
  const question = props.question;
  const deleteQuestion = props.deleteQuestion;
  const editQuestion = props.editQuestion;

  const [type, setType] = useState(question.type);
  const [text, setText] = useState(question.text);
  const [optionArr, setOptionArr] = useState([1, 2, 3]);

  const onChange = (e) => {
    const className = e.target.className;
    const newInput = e.target.value;

    let newQuestion = { ...question };

    switch (className) {
      case "questionText":
        setText(newInput);
        newQuestion.text = newInput;
        break;
      case "questionType":
        setType(newInput);
        newQuestion.type = newInput;
        break;
      case "questionOption":
        const idStr = e.target.id;

        //option_X => X
        const idx = idStr.includes("option_")
          ? parseInt(idStr.substring(7))
          : -1;

        const newOptionArr = [...optionArr];
        newOptionArr[idx] = newInput;
        setOptionArr(newOptionArr);
        newQuestion.optionArr = [...newOptionArr];
        break;

      default:
        break;
    }

    editQuestion(newQuestion);
  };

  const isMultiple = (queryType) => {
    return queryType === "multiple";
  };

  return (
    <div className="formComponentItemsColumn">
      <input
        className="questionText"
        placeholder="Enter text..."
        onChange={onChange}
      />
      <div className="formComponentItemsRow">
        <select className="questionType" id="questionType" onChange={onChange}>
          <option value={"number"}>Number</option>
          <option value={"boolean"}>Boolean</option>
          <option value={"text"}>Text</option>
          <option value={"multiple"}>Multiple</option>
        </select>
        <ButtonDeleteQuestion
          onClick={deleteQuestion}
          idToDelete={question._id}
        />
      </div>
      {isMultiple(type) && (
        <div className="formComponentItemsColumnLeft">
          {optionArr.map((option, idx) => (
            <InputFieldQuestionMultipleChoice
              key={"option_" + idx}
              id={"option_" + idx}
              onChange={onChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { EditQuestionForm };
