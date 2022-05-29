import { useState } from "react";

import { InputField } from "../common/InputField";
import { EditImageForm } from "./profile-image/EditImageForm";

function EditProfileForm(props) {
  //inherited props
  const formData = props.formData;
  const onChange = props.onChange;

  //own props
  const { imgUrl, name, email, address_1, address_2 } = formData;

  return (
    <div className="formComponentItemsColumn">
      <EditImageForm name={"imgUrl"} value={imgUrl} onChange={onChange} />
      <InputField name={"name"} value={name} onChange={onChange} />
      <InputField name={"email"} value={email} onChange={onChange} />
      <InputField name={"address_1"} value={address_1} onChange={onChange} />
      <InputField name={"address_2"} value={address_2} onChange={onChange} />
    </div>
  );
}

export default EditProfileForm;
