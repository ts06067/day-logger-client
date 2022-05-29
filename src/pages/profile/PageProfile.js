import "../common/css/Page.css";

import { useEffect, useState } from "react";

import { updateUserAPIMethod } from "../../api/client";

import { ButtonSave } from "../../components/common/Button";
import EditProfileTitle from "../../components/profile/EditProfileTitle";
import EditProfileForm from "../../components/profile/EditProfileForm";

function PageProfile(props) {
  //inherited props
  const profile = props.profile;
  const setProfile = props.setProfile;

  //own props
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const saveUser = () => {
    updateUserAPIMethod(formData).then((res) => {
      console.log("Update User Success");
      setProfile(formData);
    });
  };

  return (
    <div className="formComponentItemsColumn">
      <EditProfileTitle />
      <EditProfileForm formData={formData} onChange={handleInputChange} />
      <ButtonSave onClick={saveUser} />
    </div>
  );
}

export default PageProfile;
