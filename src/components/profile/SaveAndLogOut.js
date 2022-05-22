import "../common/css/FormComponent.css";

import { ButtonSave, ButtonLogOut } from "../common/Button";

function SaveAndLogOut() {
  return (
    <div className="formComponentItemsRow">
      <ButtonSave />
      <ButtonLogOut />
    </div>
  );
}

export default SaveAndLogOut;
