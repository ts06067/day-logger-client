import { useState, useEffect } from "react";

import { ButtonPrevDate, ButtonNextDate } from "../common/Button";

function DateSelect(props) {
  //inherited props
  const date = props.date;
  const setDate = props.setDate;
  const dayToMS = 60 * 60 * 24 * 1000;

  //own props
  const [displayNextButton, setDisplayNextButton] = useState(true);

  useEffect(() => {
    const isToday = new Date() - date < dayToMS;
    setDisplayNextButton(!isToday);
  }, [date]);

  const setPrevDate = (e) => {
    e.preventDefault();
    const dateInMS = date.getTime();
    setDate(new Date(dateInMS - 1 * dayToMS));
  };

  const setNextDate = (e) => {
    e.preventDefault();
    const dateInMS = date.getTime();
    const nextDate = dateInMS + 1 * dayToMS;
    if (nextDate > new Date()) {
      //do not go to future
      return;
    }
    setDate(new Date(nextDate));
  };

  return (
    <div className="formDateSelect">
      <ButtonPrevDate onClick={setPrevDate} />
      <div id="lbDate">{date.toISOString()}</div>
      {displayNextButton && <ButtonNextDate onClick={setNextDate} />}
    </div>
  );
}

export { DateSelect };
