import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";

import { getOClock, isSameDay } from "../../utils/helper";

import "react-calendar/dist/Calendar.css";
import "./css/ViewDataByDateForm.css";

function ViewDataByDateForm(props) {
  //inherited props
  const loggedDataSetArr = props.loggedDataSetArr;

  //own props
  const [loggedDataArr, setLoggedDataArr] = useState([]);
  const [dateWithData, setDateWithData] = useState([]);
  const [date, setDate] = useState(new Date());

  //append dateWithData on load
  useEffect(() => {
    const newDateWithData = [];

    loggedDataSetArr.forEach((lds) => {
      newDateWithData.push(new Date(lds.date));
    });

    setDateWithData(newDateWithData);
    setDate(newDateWithData[0]);
  }, [loggedDataSetArr]);

  //update loggedDataSet to date
  useEffect(() => {
    if (date === undefined) {
      return;
    }

    const idx = loggedDataSetArr.findIndex((lds) =>
      isSameDay(new Date(lds.date), date)
    );

    if (idx !== -1) {
      const newLoggedDataSet = loggedDataSetArr[idx];
      setLoggedDataArr(newLoggedDataSet.logged_data_arr);
    }
  }, [date, loggedDataSetArr]);

  //style active tiles
  const tileClassName = ({ date, view }) => {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (dateWithData.find((dDate) => isSameDay(dDate, date))) {
        if (isSameDay(date, new Date())) {
          return "tileLoggedToday";
        }
        return "tileLogged";
      }
    }
  };

  //style nonactive tiles
  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return dateWithData.findIndex((dDate) => isSameDay(dDate, date)) === -1;
    }
    return false;
  };

  const render = (ld) => {
    const question = ld.question;
    const text = question.text;
    const answer = ld.answer;

    return (
      <div className="formComponentItemsColumn">
        <h3>{text}</h3>
        <p>{answer}</p>
      </div>
    );
  };

  return (
    <div className="formComponentItemsColumn">
      <Calendar
        value={date}
        onChange={setDate}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
      />
      {loggedDataArr.map(render)}
    </div>
  );
}

export default ViewDataByDateForm;
