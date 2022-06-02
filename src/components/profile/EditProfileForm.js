import { useState } from "react";

import { InputField } from "../common/InputField";
import { EditImageForm } from "./profile-image/EditImageForm";

import "./css/ProfileForm.css";

function EditProfileForm(props) {
  //inherited props
  const formData = props.formData;
  const setFormData = props.setFormData;
  const setImgToUpload = props.setImgToUpload;
  const onChange = props.onChange;

  //own props
  const { name, email, address_1, address_2 } = formData;

  return (
    <div className="formContainer column">
      <EditImageForm
        name={"imgUrl"}
        formData={formData}
        setFormData={setFormData}
        setImgToUpload={setImgToUpload}
      />
      <div className="formComponent column padded rounded white">
        <span className="profileFormTitle">Name</span>
        <InputField name={"name"} value={name} onChange={onChange} />
      </div>
      <div className="formComponent column padded rounded white">
        <span className="profileFormTitle">Email</span>
        <InputField name={"email"} value={email} onChange={onChange} />
      </div>
      <div className="formComponent column padded rounded white">
        <span className="profileFormTitle">Address</span>
        <InputField name={"address_1"} value={address_1} onChange={onChange} />
        <InputField name={"address_2"} value={address_2} onChange={onChange} />
      </div>
    </div>
  );
}

export default EditProfileForm;
