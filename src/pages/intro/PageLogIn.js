import "../common/css/Page.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getUserAPIMethod,
  loginAPIMethod,
  registerAPIMethod,
} from "../../api/client";

import LogInForm from "../../components/intro/LogInForm";
import { ButtonSave } from "../../components/common/Button";
import RegisterForm from "../../components/intro/RegisterForm";

function PageLogIn(props) {
  //inherited props
  const setIsLoggedIn = props.setIsLoggedIn;

  //own props
  const [doRegister, setDoRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const navigateAfterLogin = async () => {
    loginAPIMethod(formData).then((res) => {
      console.log("Login success");
      //set logged in state
      setIsLoggedIn(true);
      sessionStorage.setItem("isLoggedIn", true);
      navigate("/logday");
    });
  };

  const navigateAfterRegister = async () => {
    //if first time clicking (doregi false), set doRegister to true
    if (!doRegister) {
      setDoRegister(true);
    } else {
      registerAPIMethod(formData).then(() => {
        console.log("Register Success");
        setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", true);
        navigate("/logday");
      });
    }
    //if second time clicking (doregi true), call api register
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
      {!doRegister && (
        <LogInForm formData={formData} onChange={handleInputChange} />
      )}
      {doRegister && (
        <RegisterForm formData={formData} onChange={handleInputChange} />
      )}
      {!doRegister && <ButtonSave onClick={navigateAfterLogin} />}
      <ButtonSave onClick={navigateAfterRegister} />
    </div>
  );
}

export default PageLogIn;
