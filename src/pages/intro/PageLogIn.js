import "../common/css/Page.css";
import "./css/PageLogin.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getUserAPIMethod,
  loginAPIMethod,
  registerAPIMethod,
} from "../../api/client";

import { validateEmail } from "../../utils/validator";

import LogInForm from "../../components/intro/LogInForm";
import { ButtonIntro } from "../../components/common/Button";
import RegisterForm from "../../components/intro/RegisterForm";
import ErrorMessage from "../../components/common/ErrorMessage";

function PageLogIn(props) {
  //inherited props
  const setIsLoggedIn = props.setIsLoggedIn;

  //own props
  const [displayError, setDisplayError] = useState(false);
  const [doRegister, setDoRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const navigateAfterLogin = async () => {
    const { email, password } = formData;

    if (!(validateEmail(email) && password.length >= 6)) {
      console.log("Invalid Input");
      setDisplayError(true);
      return;
    }

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
      registerAPIMethod(formData)
        .then(() => {
          console.log("Register Success");
          setIsLoggedIn(true);
          sessionStorage.setItem("isLoggedIn", true);
          navigate("/logday");
        })
        .catch(() => {
          console.log("Failed to register. Enter name or try different email.");
          setDisplayError(true);
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

  const toggle = () => {
    setDoRegister(!doRegister);
  };

  return (
    <form className="introContainer">
      <ErrorMessage
        displayError={displayError}
        setDisplayError={setDisplayError}
        title="Please enter valid information."
      />

      <div id="introForm" className="formContainer column padded rounded white">
        <span id="icon" className="logo material-icons">
          checklist
        </span>
        <h1 className="logo">Day Logger</h1>
        <p className="logo">Get Your Day Organized.</p>
        {!doRegister && (
          <LogInForm formData={formData} onChange={handleInputChange} />
        )}
        {doRegister && (
          <RegisterForm formData={formData} onChange={handleInputChange} />
        )}

        <div className="row spaceBetween marginTop">
          {!doRegister && (
            <ButtonIntro onClick={navigateAfterLogin} title="Login" />
          )}
          {doRegister && <ButtonIntro onClick={toggle} title="Back" />}
          <ButtonIntro onClick={navigateAfterRegister} title="Sign up" />
        </div>
      </div>
    </form>
  );
}

export default PageLogIn;
