import "../common/css/Page.css";

import { useEffect, useState } from "react";

import { getAllLoggedDataSetAPIMethod } from "../../api/client";

import ViewDataTitle from "../../components/view-data/ViewDataTitle";
import ViewDataByQuestionForm from "../../components/view-data/ViewDataByQuestionForm";
import ViewDataByDateForm from "../../components/view-data/ViewDataByDateForm";

function PageViewData() {
  const [loggedDataSetArr, setLoggedDataSetArr] = useState([]); //grouped by date
  const [loggedDataByQuestionArr, setLoggedDataByQuestionArr] = useState([]); //grouped by question

  //retrieve all dataset on load
  useEffect(() => {
    //get all lds
    getAllLoggedDataSetAPIMethod().then((ldss) => {
      if (!ldss) {
        console.log("No LoggedDataSet");
        return;
      }
      setLoggedDataSetArr(ldss.sort((a, b) => (a.date < b.date ? 1 : -1)));
    });
  }, []);

  //group by questions
  useEffect(() => {
    const newLoggedDataByQuestionArr = [];

    loggedDataSetArr.forEach((lds) => {
      const date = lds.date;
      const loggedDataArr = lds.logged_data_arr;

      loggedDataArr.forEach((ld) => {
        //get question
        const question = ld.question;
        const question_id = question._id;
        const text = question.text;
        const type_of_question = question.type_of_question;

        //get answer
        const answer = ld.answer;
        const answer_id = ld._id;

        //save {question: {text, type}, answers: [{date, answer}, ...]}
        //find equivalence
        const idx = newLoggedDataByQuestionArr.findIndex(function (ld) {
          const ldQuestion = ld.question;
          const ldQText = ldQuestion.text;
          const ldQType = ldQuestion.type_of_question;
          return ldQText === text && ldQType === type_of_question;
        });

        if (idx !== -1) {
          //if found
          newLoggedDataByQuestionArr[idx].answers.push({
            _id: answer_id,
            date,
            answer,
          });
        } else {
          //else create new entry
          newLoggedDataByQuestionArr.push({
            question: { _id: question_id, text, type_of_question },
            answers: [{ _id: answer_id, date, answer }],
          });
        }
      });
    });

    setLoggedDataByQuestionArr(newLoggedDataByQuestionArr);
  }, [loggedDataSetArr]);

  return (
    <div className="pageContainer">
      <ViewDataTitle />
      <ViewDataByQuestionForm
        loggedDataByQuestionArr={loggedDataByQuestionArr}
      />
      <ViewDataByDateForm loggedDataSetArr={loggedDataSetArr} />
    </div>
  );
}

export default PageViewData;
