import "../common/css/Page.css";

import { useState } from "react";

import EditProfileForm from "../../components/profile/EditProfileForm";
import EditProfileTitle from "../../components/profile/EditProfileTitle";
import SaveAndLogOut from "../../components/profile/SaveAndLogOut";

function PageProfile() {
  const [profile, setProfile] = useState({
    image: "www.naver.com",
    name: "Yoki",
    email: "2sdf",
    address: "asdf",
  });

  return (
    <div>
      <EditProfileTitle />
      <EditProfileForm type={"image"} data={profile} />
      <EditProfileForm type={"name"} data={profile} />
      <EditProfileForm type={"email"} data={profile} />
      <EditProfileForm type={"address"} data={profile} />
      <SaveAndLogOut />
    </div>
  );
}

export default PageProfile;
