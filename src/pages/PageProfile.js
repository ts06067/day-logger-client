import {
  FormDefault,
  FormEditProfileImage,
  FormEditProfileTitle,
  FormProfileUserQuery,
  FormSaveLogOut,
  FormUserQuery,
} from "../components/FormComponent";

import { useState } from "react";

function PageProfile() {
  const [profile, setProfile] = useState({
    image: "www.naver.com",
    name: "Yoki",
    email: "2sdf",
    address: "asdf",
  });

  return (
    <div>
      <FormEditProfileTitle />
      <FormProfileUserQuery type={"image"} data={profile} />
      <FormProfileUserQuery type={"name"} data={profile} />
      <FormProfileUserQuery type={"email"} data={profile} />
      <FormProfileUserQuery type={"address"} data={profile} />
      <FormSaveLogOut />
    </div>
  );
}

export default PageProfile;
