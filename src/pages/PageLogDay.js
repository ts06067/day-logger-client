import {
  FormDefault,
  FormDateSelect,
  FormSubmit,
  FormUserQuery,
  FormLogDayUserQuery,
  FormSave,
} from "../components/FormComponent";

import "./css/PageCommon.css";

import { useEffect, useState } from "react";

function PageLogDay() {
  const [questionArr, setQuestionArr] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loggedDataArr, setLoggedDataArr] = useState([]);

  //set QuestionArr on load
  useEffect(() => {
    setQuestionArr([
      { _id: 2345, type: "number", text: "sample1" },
      { _id: 245, type: "boolean", text: "sample2" },
      { _id: 45, type: "text", text: "sample3" },
      { _id: 235, type: "multiple", text: "sample4" },
    ]);
  }, []);

  const isEmpty = (arr) => {
    return arr.length === 0;
  };

  const render = () => {
    if (isEmpty(loggedDataArr)) {
      if (isEmpty(questionArr)) {
        return <>Make Question First</>;
      } else {
        //no logged data but question
        return questionArr.map((data) => (
          <FormLogDayUserQuery key={data._id} data={data} date={date} />
        ));
      }
    } else {
      return loggedDataArr.map((data) => (
        <FormLogDayUserQuery data={data} date={date} />
      ));
    }
  };

  return (
    <div className="pageContainer">
      <form>
        <FormDateSelect date={date} setDate={setDate} />
        {render()}
        <FormSave />
      </form>
    </div>
  );
}

export default PageLogDay;
