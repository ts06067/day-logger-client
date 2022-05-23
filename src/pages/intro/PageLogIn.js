import "../common/css/Page.css";

import { useNavigate } from "react-router-dom";

import { loginAPIMethod } from "../../api/client";

import { ButtonSave } from "../../components/common/Button";

function PageLogIn() {
  const navigate = useNavigate();

  const navigateAfterLogin = async () => {
    loginAPIMethod().then((res) => {
      console.log("Login success");
      navigate("/logday");
    });
  };

  return (
    <div className="formComponentItemsColumn">
      <input />
      <input />
      <ButtonSave onClick={navigateAfterLogin} />
    </div>
  );
}

export default PageLogIn;
