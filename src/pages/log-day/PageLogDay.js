import "../common/css/Page.css";

import { useEffect, useState } from "react";

import {
  getQuestionSetAPIMethod,
  getLoggedDataSetAPIMethod,
  createLoggedDataSetAPIMethod,
} from "../../api/client";

import { dateTo8DStr, onFalseError } from "../../utils/helper";

import { ButtonSave } from "../../components/common/Button";
import { LogDayForm } from "../../components/log-day/LogDayForm";
import { DateSelect } from "../../components/log-day/DateSelect";

function PageLogDay() {
  const [isLogged, setIsLogged] = useState(false);
  const [questionEntryArr, setQuestionEntryArr] = useState([]);
  const [loggedDataEntryArr, setLoggedDataEntryArr] = useState([]);
  const [date, setDate] = useState(new Date());

  //retrieve preset on load
  useEffect(() => {
    //get qs
    getQuestionSetAPIMethod().then((qs) => {
      if (!qs) {
        console.log("No Questions");
        return;
      }
      setQuestionEntryArr(qs.question_arr);
    });
  }, []);

  useEffect(() => {
    //get lds
    getLoggedDataSetAPIMethod(dateTo8DStr(date)).then((lds) => {
      if (!lds) {
        console.log("No LoggedDataSet");

        if (questionEntryArr.length) {
          const newLoggedDataEntryArr = [];
          questionEntryArr.forEach((q) => {
            newLoggedDataEntryArr.push({
              _id: Math.random(), //random id for nonsaved obj
              question: { ...q },
              answer: "",
            });
            setLoggedDataEntryArr(newLoggedDataEntryArr);
          });
          console.log(newLoggedDataEntryArr);
          setIsLogged(false); //mark unlogged
        }
        return;
      }
      setIsLogged(true); //mark logged
      setLoggedDataEntryArr(lds.logged_data_arr);
    });
  }, [questionEntryArr, date]);

  const editLoggedData = (name, value, i) => {
    let newLoggedDataEntryArr = loggedDataEntryArr;
    //find entry at index i
    let newLoggedDataEntry = newLoggedDataEntryArr[i];
    //change attr.
    newLoggedDataEntry = { ...newLoggedDataEntry, [name]: value };
    //reassign to a[i]
    newLoggedDataEntryArr[i] = newLoggedDataEntry;
    //update
    setLoggedDataEntryArr(newLoggedDataEntryArr);

    console.log(newLoggedDataEntryArr);
  };

  const saveLoggedDataArr = () => {
    //check if any empty of less
    let error = false;

    loggedDataEntryArr.forEach((ld) => {
      //logged data entry
      const answer = ld.answer;

      if (answer.length === 0) {
        console.log("answer should be nonempty");
        error = true;
        return;
      }
    });

    if (error) {
      return;
    }

    console.log(loggedDataEntryArr);

    if (isLogged) {
      createLoggedDataSetAPIMethod({
        logged_data_arr: { ...loggedDataEntryArr },
        date,
      }).then((res) => console.log("Saving New LoggedDataSet Successful"));
    } else {
    }
  };

  return (
    <div className="pageContainer">
      <form>
        <DateSelect date={date} setDate={setDate} />
        {loggedDataEntryArr.map((ld, i) => (
          <LogDayForm
            key={ld._id}
            index={i}
            question={ld.question}
            answer={ld.answer}
            editLoggedData={editLoggedData}
          />
        ))}
        <ButtonSave onClick={saveLoggedDataArr} />
      </form>
    </div>
  );
}

export default PageLogDay;
