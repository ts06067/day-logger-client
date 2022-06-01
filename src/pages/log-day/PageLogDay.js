import "../common/css/Page.css";

import { useEffect, useState } from "react";

import { getOClock, parseUniqueName } from "../../utils/helper";

import {
  getQuestionSetAPIMethod,
  getLoggedDataSetAPIMethod,
  createLoggedDataSetAPIMethod,
  updateLoggedDataSetAPIMethod,
} from "../../api/client";

import { ButtonSave } from "../../components/common/Button";
import { LogDayForm } from "../../components/log-day/LogDayForm";
import { DateSelect } from "../../components/log-day/DateSelect";

function PageLogDay() {
  const [isLogged, setIsLogged] = useState(false);
  const [questionEntryArr, setQuestionEntryArr] = useState([]);
  const [loggedDataEntryArr, setLoggedDataEntryArr] = useState([]);
  const [date, setDate] = useState(getOClock());

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
    getLoggedDataSetAPIMethod(date).then((lds) => {
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
    newLoggedDataEntry = {
      ...newLoggedDataEntry,
      [parseUniqueName(name)]: value,
    };
    //reassign to a[i]
    newLoggedDataEntryArr[i] = newLoggedDataEntry;
    //update
    setLoggedDataEntryArr(newLoggedDataEntryArr);
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

    if (isLogged) {
      updateLoggedDataSetAPIMethod(loggedDataEntryArr, date).then((res) =>
        console.log("Updating LoggedDataSet Successful")
      );
    } else {
      createLoggedDataSetAPIMethod({
        logged_data_arr: { ...loggedDataEntryArr },
        date,
      }).then((res) => console.log("Saving New LoggedDataSet Successful"));
    }
  };

  return (
    <form className="pageContainer">
      <div className="formContainer column">
        <DateSelect date={date} setDate={setDate} />
        <div className="marginTop" />
        {loggedDataEntryArr.map((ld, i) => (
          <LogDayForm
            key={ld._id}
            index={i}
            question={ld.question}
            answer={ld.answer}
            editLoggedData={editLoggedData}
          />
        ))}
        <div className="formContainer row">
          <ButtonSave onClick={saveLoggedDataArr} />
        </div>
      </div>
    </form>
  );
}

export default PageLogDay;
