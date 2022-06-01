import { useEffect, useState } from "react";

import DataGroupText from "./data-group/DataGroupText";
import DataGroupNumber from "./data-group/DataGroupNumber";
import DataGroupBoolean from "./data-group/DataGroupBoolean";
import DataGroupMultiple from "./data-group/DataGroupMultiple";

function ViewDataByQuestionForm(props) {
  //inherited props
  const loggedDataByQuestionArr = props.loggedDataByQuestionArr;

  //own props
  const [loggedDataByTextQArr, setLoggedDataByTextQArr] = useState([]);
  const [loggedDataByNumberQArr, setLoggedDataByNumberQArr] = useState([]);
  const [loggedDataByBooleanQArr, setLoggedDataByBooleanQArr] = useState([]);
  const [loggedDataByMCQArr, setLoggedDataByMCQArr] = useState([]);

  useEffect(() => {
    //push to different categories
    const newLoggedDataByTextQArr = [];
    const newLoggedDataByNumberQArr = [];
    const newLoggedDataByBooleanQArr = [];
    const newLoggedDataByMCQArr = [];

    loggedDataByQuestionArr.forEach((lds) => {
      const type_of_question = lds.question.type_of_question;
      switch (type_of_question) {
        case "text":
          newLoggedDataByTextQArr.push(lds);
          break;
        case "number":
          newLoggedDataByNumberQArr.push(lds);
          break;
        case "boolean":
          newLoggedDataByBooleanQArr.push(lds);
          break;
        case "multiple":
          newLoggedDataByMCQArr.push(lds);
          break;
        default:
          break;
      }
    });

    //update
    setLoggedDataByTextQArr(newLoggedDataByTextQArr);
    setLoggedDataByNumberQArr(newLoggedDataByNumberQArr);
    setLoggedDataByBooleanQArr(newLoggedDataByBooleanQArr);
    setLoggedDataByMCQArr(newLoggedDataByMCQArr);
  }, [loggedDataByQuestionArr]);

  return (
    <div className="formComponent column padded rounded white">
      <DataGroupText loggedDataByTextQArr={loggedDataByTextQArr} />
      <DataGroupNumber loggedDataByNumberQArr={loggedDataByNumberQArr} />
      <DataGroupBoolean loggedDataByBooleanQArr={loggedDataByBooleanQArr} />
      <DataGroupMultiple loggedDataByMCQArr={loggedDataByMCQArr} />
    </div>
  );
}

export default ViewDataByQuestionForm;
