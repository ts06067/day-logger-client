import "../common/css/Page.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserAPIMethod, loginAPIMethod } from "../../api/client";

import LogInForm from "../../components/intro/LogInForm";
import { ButtonSave } from "../../components/common/Button";

function PageLogIn(props) {
  //inherited props
  const setIsLoggedIn = props.setIsLoggedIn;

  //own props
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const navigateAfterLogin = async () => {
    console.log(formData);
    loginAPIMethod(formData).then((res) => {
      console.log("Login success");
      //set logged in state
      setIsLoggedIn(true);
      sessionStorage.setItem("isLoggedIn", true);
      navigate("/logday");
    });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  return (
    <div className="formComponentItemsColumn">
      <LogInForm formData={formData} onChange={handleInputChange} />
      <ButtonSave onClick={navigateAfterLogin} />
    </div>
  );
}

export default PageLogIn;
