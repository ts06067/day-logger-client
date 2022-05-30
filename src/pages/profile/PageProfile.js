import "../common/css/Page.css";

import { useEffect, useState } from "react";

import {
  getUserAPIMethod,
  updateUserAPIMethod,
  uploadImageToCloudinaryAPIMethod,
} from "../../api/client";

import { ButtonSave } from "../../components/common/Button";
import EditProfileTitle from "../../components/profile/EditProfileTitle";
import EditProfileForm from "../../components/profile/EditProfileForm";

function PageProfile(props) {
  //inherited props
  const profile = props.profile;
  const setProfile = props.setProfile;

  //own props
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    imgUrl: "",
    address_1: "",
    address_2: "",
  });
  const [imgToUpload, setImgToUpload] = useState(null);

  //get profile on load
  useEffect(() => {
    getUserAPIMethod().then((res) => {
      setProfile(res);
      console.log("Profile Fetch Success");
    });
  }, []);

  useEffect(() => {
    if (!profile) {
      return;
    }

    const { name, email, imgUrl, address } = profile;
    const { address_1, address_2 } = address;
    const newFormData = { name, email, imgUrl, address_1, address_2 };
    setFormData(newFormData);
  }, [profile]);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const saveUser = async () => {
    //upload to Cloudinary
    let uploadedImgUrl = "";

    if (imgToUpload) {
      const imgFormData = new FormData();
      const unsignedUploadPreset = "jpxjict6"; //my cloud id

      imgFormData.append("file", imgToUpload);
      imgFormData.append("upload_preset", unsignedUploadPreset);

      await uploadImageToCloudinaryAPIMethod(imgFormData).then((res) => {
        uploadedImgUrl = res.url; //fetch url
        console.log("Upload to Cloudinary Success");
      });
    }

    const newFormData = { ...formData, imgUrl: uploadedImgUrl };

    await updateUserAPIMethod(newFormData).then((res) => {
      console.log("Update User Success");
    });

    await getUserAPIMethod().then((res) => {
      console.log("Get New User Success");
      setProfile(res);
    });
  };

  return (
    <div className="formComponentItemsColumn">
      <EditProfileTitle />
      <EditProfileForm
        formData={formData}
        onChange={handleInputChange}
        setFormData={setFormData}
        setImgToUpload={setImgToUpload}
      />
      <ButtonSave onClick={saveUser} />
    </div>
  );
}

export default PageProfile;
