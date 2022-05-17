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

function FormDefault() {
  return <div className="formComponentItem">name</div>;
}

function FormUserQuery() {
  return (
    <div className="formComponentItemsColumn">
      <div>query1</div>
      <input></input>
    </div>
  );
}

function FormEditQuestionUserQuery() {
  return (
    <div className="formComponentItemsColumn">
      <input></input>
      <div className="formQueryTypeContainer">
        <select id="queryType">
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="text">Text</option>
          <option value="multiple">Multiple</option>
        </select>
        <ButtonDeleteQuestion />
      </div>
    </div>
  );
}

function FormEditQuestionTitle() {
  return (
    <div className="formEditTitle">
      <div>Edit Questions</div>
      <ButtonAddQuestion />
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

function FormDateSelect() {
  return (
    <div className="formDateSelect">
      <ButtonPrevDate />
      <div id="lbDate">date</div>
      <ButtonNextDate />
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

function FormSave() {
  return (
    <div className="formComponentItem">
      <ButtonSave />
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
  FormEditQuestionTitle,
  FormEditQuestionUserQuery,
  FormEditProfileTitle,
  FormEditProfileImage,
  FormSubmit,
  FormSave,
  FormSaveLogOut,
};
