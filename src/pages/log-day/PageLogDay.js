import "../common/css/Page.css";

import { useEffect, useState } from "react";

import { ButtonSave } from "../../components/common/Button";
import { LogDayForm } from "../../components/log-day/LogDayForm";
import { DateSelect } from "../../components/log-day/DateSelect";

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
          <LogDayForm key={data._id} data={data} date={date} />
        ));
      }
    } else {
      return loggedDataArr.map((data) => (
        <LogDayForm data={data} date={date} />
      ));
    }
  };

  return (
    <div className="pageContainer">
      <form>
        <DateSelect date={date} setDate={setDate} />
        {render()}
        <ButtonSave />
      </form>
    </div>
  );
}

export default PageLogDay;
