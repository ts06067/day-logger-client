import "./css/FormComponent.css";

import {
  ButtonAddQuestion,
  ButtonChooseNewImage,
  ButtonDeleteQuestion,
  ButtonLogOut,
  ButtonNextDate,
  ButtonPrevDate,
  ButtonRemoveImage,
  ButtonSave,
  ButtonSubmit,
} from "../components/Button";
import { ProfileBox } from "./ProfileBox";

import { useEffect, useState } from "react";
import {
  InputFieldGeneral,
  InputFieldLogDayBoolean,
  InputFieldLogDayMultipleChoice,
  InputFieldLogDayNumber,
  InputFieldLogDayText,
  InputFieldQuestionMultipleChoice,
} from "./InputField";

function FormDefault() {
  return <div className="formComponentItem">name</div>;
}

function FormUserQuery(props) {
  return (
    <div className="formComponentItemsColumn">
      <div>query1</div>
      <input></input>
    </div>
  );
}

function FormProfileUserQuery(props) {
  const type = props.type;
  const profile = props.profile;

  if (type === "image") {
    return <FormEditProfileImage profile={profile} />;
  }

  const render = () => {
    switch (type) {
      case "name":
        return <InputFieldGeneral type={"profile_" + type} />;
      case "email":
        return <InputFieldGeneral type={"profile_" + type} />;
      case "address":
        return (
          <>
            <InputFieldGeneral type={"profile_" + type + "_1"} />
            <InputFieldGeneral type={"profile_" + type + "_2"} />
          </>
        );

      default:
        break;
    }
  };

  return <div className="formComponentItemsColumn">{render()}</div>;
}

function FormLogDayUserQuery(props) {
  const data = props.data;
  const date = props.date;

  const type = data.type;
  const text = data.text;
  const optionArr = data.optionArr;

  const [logResponse, setLogResponse] = useState(data.logResponse || ""); //user answer to the question

  const onChange = (e) => {
    const className = e.target.className;
    const newInput = e.target.value;

    if (className === "logResponse") {
      setLogResponse(newInput);
    }
  };

  const render = () => {
    switch (type) {
      case "number":
        return (
          <InputFieldLogDayNumber value={logResponse} onChange={onChange} />
        );

      case "boolean":
        return (
          <InputFieldLogDayBoolean value={logResponse} onChange={onChange} />
        );

      case "text":
        return <InputFieldLogDayText value={logResponse} onChange={onChange} />;

      case "multiple":
        return (
          <InputFieldLogDayMultipleChoice
            value={logResponse}
            onChange={onChange}
          />
        );

      default:
        break;
    }
  };

  return (
    <div className="formComponentItemsColumn">
      {text}
      {render()}
    </div>
  );
}

function FormEditQuestionUserQuery(props) {
  const question = props.question;
  const deleteQuestion = props.deleteQuestion;
  const editQuestion = props.editQuestion;

  const [type, setType] = useState(question.type);
  const [text, setText] = useState(question.text);
  const [optionArr, setOptionArr] = useState([1, 2, 3]);

  const onChange = (e) => {
    const className = e.target.className;
    const newInput = e.target.value;

    let newQuestion = { ...question };

    switch (className) {
      case "questionText":
        setText(newInput);
        newQuestion.text = newInput;
        break;
      case "questionType":
        setType(newInput);
        newQuestion.type = newInput;
        break;
      case "questionOption":
        const idStr = e.target.id;

        //option_X => X
        const idx = idStr.includes("option_")
          ? parseInt(idStr.substring(7))
          : -1;

        const newOptionArr = [...optionArr];
        newOptionArr[idx] = newInput;
        setOptionArr(newOptionArr);
        newQuestion.optionArr = [...newOptionArr];
        break;

      default:
        break;
    }

    editQuestion(newQuestion);
  };

  const isMultiple = (queryType) => {
    return queryType === "multiple";
  };

  return (
    <div className="formComponentItemsColumn">
      <input
        className="questionText"
        placeholder="Enter text..."
        onChange={onChange}
      />
      <div className="formComponentItemsRow">
        <select className="questionType" id="questionType" onChange={onChange}>
          <option value={"number"}>Number</option>
          <option value={"boolean"}>Boolean</option>
          <option value={"text"}>Text</option>
          <option value={"multiple"}>Multiple</option>
        </select>
        <ButtonDeleteQuestion
          onClick={deleteQuestion}
          idToDelete={question._id}
        />
      </div>
      {isMultiple(type) && (
        <div className="formComponentItemsColumnLeft">
          {optionArr.map((option, idx) => (
            <InputFieldQuestionMultipleChoice
              key={"option_" + idx}
              id={"option_" + idx}
              onChange={onChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FormEditQuestionTitle(props) {
  const addQuestion = props.addQuestion;

  return (
    <div className="formEditTitle">
      <div>Edit Questions</div>
      <ButtonAddQuestion onClick={addQuestion} />
    </div>
  );
}

function FormEditProfileTitle() {
  return (
    <div className="formEditTitle">
      <div>Edit Profile</div>
    </div>
  );
}

function FormEditProfileImage() {
  return (
    <div className="formComponentItem">
      <p>Profile Photo</p>
      <div className="formProfileEditContainer">
        <ProfileBox />
        <ButtonChooseNewImage />
        <ButtonRemoveImage />
      </div>
    </div>
  );
}

function FormDateSelect(props) {
  const date = props.date;
  const setDate = props.setDate;
  const dayToMS = 60 * 60 * 24 * 1000;

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
      <ButtonNextDate onClick={setNextDate} />
    </div>
  );
}

function FormSubmit() {
  return (
    <div className="formComponentItem">
      <ButtonSubmit />
    </div>
  );
}

function FormSave(props) {
  const saveForm = props.saveForm;

  return (
    <div className="formComponentItem">
      <ButtonSave onClick={saveForm} />
    </div>
  );
}

function FormSaveLogOut() {
  return (
    <div className="formComponentItemsRow">
      <ButtonSave />
      <ButtonLogOut />
    </div>
  );
}

export {
  FormDefault,
  FormDateSelect,
  FormUserQuery,
  FormLogDayUserQuery,
  FormEditQuestionTitle,
  FormEditQuestionUserQuery,
  FormEditProfileTitle,
  FormEditProfileImage,
  FormProfileUserQuery,
  FormSubmit,
  FormSave,
  FormSaveLogOut,
};
