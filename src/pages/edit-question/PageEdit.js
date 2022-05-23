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
  const [questionSet, setQuestionSet] = useState({});
  const [questionEntryArr, setQuestionEntryArr] = useState([]);

  //retrieve preset on load
  useEffect(() => {
    getQuestionSetAPIMethod().then((qs) => {
      setQuestionSet(qs);
      setQuestionEntryArr(qs.question_arr);
    });
  }, []);

  const addQuestion = () => {};

  const deleteQuestion = (i) => {};

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

    console.log(newQuestionEntryArr);
  };

  const saveQuestionArr = () => {};

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
