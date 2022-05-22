import "../../common/css/FormComponent.css";

import { ButtonChooseNewImage, ButtonRemoveImage } from "../../common/Button";
import { ProfileBox } from "../../common/ProfileBox";

function EditImageForm() {
  return (
    <div className="formComponentItem">
      <p>Profile Photo</p>
      <div className="formProfileEditContainer">
        <ProfileBox />
        <ButtonChooseNewImage />
        <ButtonRemoveImage />
      </div>
    </div>
  );
}

export { EditImageForm };
