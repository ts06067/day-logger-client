import "../common/css/Page.css";

import { useState } from "react";

import { ButtonSave } from "../../components/common/Button";
import { EditQuestionForm } from "../../components/edit-question/EditQuestionForm";
import { EditQuestionTitle } from "../../components/edit-question/EditQuestionTitle";

function PageEdit() {
  const [questionArr, setQuestionArr] = useState([]);

  const addQuestion = () => {
    //question preset
    const newQuestion = {
      _id: Math.random(),
      type: "number",
      text: "",
      optionArr: [],
    };
    //append question
    const newQuestionArr = [...questionArr, newQuestion];
    setQuestionArr(newQuestionArr);
  };

  const deleteQuestion = (_id) => {
    const newQuestionArr = questionArr.filter(
      (question) => question._id !== _id
    );

    setQuestionArr(newQuestionArr);
  };

  const editQuestion = (questionToEdit) => {
    const newQuestion = questionArr.find(
      (question) => question._id === questionToEdit._id
    );

    newQuestion.text = questionToEdit.text;
    newQuestion.type = questionToEdit.type;
    newQuestion.optionArr = questionToEdit.optionArr;
  };

  const saveQuestionArr = () => {
    console.log(questionArr);
  };

  return (
    <div className="pageContainer">
      <form>
        <EditQuestionTitle addQuestion={addQuestion} />
        {questionArr.map((question) => (
          <EditQuestionForm
            key={question._id}
            question={question}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
          />
        ))}
        <ButtonSave onClick={saveQuestionArr} />
      </form>
    </div>
  );
}

export default PageEdit;
