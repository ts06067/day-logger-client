import "./common/css/FormComponent.css";

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
} from "./common/Button";
import { ProfileBox } from "./common/ProfileBox";

import { useEffect, useState } from "react";
import {
  InputFieldGeneral,
  InputFieldLogDayBoolean,
  InputFieldLogDayMultipleChoice,
  InputFieldLogDayNumber,
  InputFieldLogDayText,
  InputFieldQuestionMultipleChoice,
} from "./common/InputField";

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
