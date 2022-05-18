import {
  FormDefault,
  FormEditQuestionTitle,
  FormEditQuestionUserQuery,
  FormSave,
} from "../components/FormComponent";

import "./css/PageCommon.css";

import { useState } from "react";

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
        <FormEditQuestionTitle addQuestion={addQuestion} />
        {questionArr.map((question) => (
          <FormEditQuestionUserQuery
            key={question._id}
            question={question}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
          />
        ))}
        <FormSave saveForm={saveQuestionArr} />
      </form>
    </div>
  );
}

export default PageEdit;
