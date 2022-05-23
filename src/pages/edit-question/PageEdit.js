import "../common/css/Page.css";

import { useState, useEffect } from "react";

import {
  getQuestionSetAPIMethod,
  createQuestionSetAPIMethod,
} from "../../api/client";

import { ButtonSave } from "../../components/common/Button";
import { EditQuestionForm } from "../../components/edit-question/EditQuestionForm";
import { EditQuestionTitle } from "../../components/edit-question/EditQuestionTitle";

function PageEdit() {
  const [questionEntryArr, setQuestionEntryArr] = useState([]);

  //retrieve preset on load
  useEffect(() => {
    getQuestionSetAPIMethod().then((qs) => {
      if (!qs) {
        console.log("No Questions");
        return;
      }

      setQuestionEntryArr(qs.question_arr);
    });
  }, []);

  const addQuestion = () => {
    const newQuestionEntry = {
      _id: Math.random(), //random id for unsaved obj
      type_of_question: "text",
    };
    const newQuestionEntryArr = [...questionEntryArr, newQuestionEntry];
    console.log(newQuestionEntryArr);
    setQuestionEntryArr(newQuestionEntryArr);
  };

  const deleteQuestion = (id) => {
    const newQuestionEntryArr = questionEntryArr.filter((q) => q._id !== id);
    setQuestionEntryArr(newQuestionEntryArr);
  };

  const editQuestion = (name, value, i) => {
    let newQuestionEntryArr = questionEntryArr;
    //find entry at index i
    let newQuestionEntry = newQuestionEntryArr[i];
    //change attr.
    newQuestionEntry = { ...newQuestionEntry, [name]: value };
    //reassign to a[i]
    newQuestionEntryArr[i] = newQuestionEntry;
    //update
    setQuestionEntryArr(newQuestionEntryArr);
  };

  const saveQuestionArr = () => {
    //check if any empty or less
    let error = false;

    questionEntryArr.forEach((q) => {
      //question entry
      const type_of_question = q.type_of_question;
      const text = q.text;
      const option = q.option;

      if (
        text.length === 0 ||
        (type_of_question === "multiple" && option.length === 0)
      ) {
        console.log("should be nonempty");
        error = true;
        return;
      }
    });

    if (error) {
      return;
    }

    createQuestionSetAPIMethod(questionEntryArr).then((res) =>
      console.log("Saving New QuestionSet Successful")
    );
  };

  return (
    <div className="pageContainer">
      <form>
        <EditQuestionTitle addQuestion={addQuestion} />
        {questionEntryArr.map((q, i) => (
          <EditQuestionForm
            key={q._id}
            index={i}
            question={q}
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
