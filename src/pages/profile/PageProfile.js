import "../common/css/Page.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getUserAPIMethod,
  logoutAPIMethod,
  updateUserAPIMethod,
  uploadImageToCloudinaryAPIMethod,
} from "../../api/client";

import { ButtonSave, ButtonUnderLine } from "../../components/common/Button";
import EditProfileTitle from "../../components/profile/EditProfileTitle";
import EditProfileForm from "../../components/profile/EditProfileForm";
import PageAdmin from "../admin/PageAdmin";

function PageProfile(props) {
  //inherited props
  const profile = props.profile;
  const setProfile = props.setProfile;
  const setIsLoggedIn = props.setIsLoggedIn;

  //own props
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    imgUrl: "",
    address_1: "",
    address_2: "",
  });
  const [imgToUpload, setImgToUpload] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [toggleAdminPage, setToggleAdminPage] = useState(false);

  const navigate = useNavigate();

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

    const { admin, name, email, imgUrl, address } = profile;

    setIsAdmin(admin);

    let address_1 = "",
      address_2 = "";
    if (address !== undefined) {
      address_1 = address.address_1;
      address_2 = address.address_2;
    }

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

    await updateUserAPIMethod(newFormData).then(() => {
      console.log("Update User Success");
    });

    await getUserAPIMethod().then((res) => {
      console.log("Get New User Success");
      setProfile(res);
    });
  };

  const logOut = async () => {
    await logoutAPIMethod().then(() => {
      console.log("LogOut Success");
      setIsLoggedIn(false);
      sessionStorage.setItem("isLoggedIn", false);
      navigate("/login");
    });
  };

  const toggle = () => {
    setToggleAdminPage(!toggleAdminPage);
  };

  if (toggleAdminPage) {
    return <PageAdmin toggle={toggle} />;
  } else {
    return (
      <form className="pageContainer">
        <div className="formContainer column">
          <EditProfileTitle />
          <EditProfileForm
            formData={formData}
            onChange={handleInputChange}
            setFormData={setFormData}
            setImgToUpload={setImgToUpload}
          />
          <div className="formContainer row spaceBetween marginTop">
            <ButtonSave onClick={saveUser} />
            <div className="row spaceBetween">
              {isAdmin && (
                <ButtonUnderLine onClick={toggle} title="Admin Page" />
              )}
              <ButtonUnderLine onClick={logOut} title="Logout" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PageProfile;
