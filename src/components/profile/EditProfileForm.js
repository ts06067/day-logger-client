import "../common/css/FormComponent.css";

import { InputFieldGeneral } from "../common/InputField";

import { EditImageForm } from "./profile-image/EditImageForm";

function EditProfileForm(props) {
  const type = props.type;
  const profile = props.profile;

  if (type === "image") {
    return <EditImageForm profile={profile} />;
  }

  const render = () => {
    switch (type) {
      case "name":
        return <InputFieldGeneral type={"profile_" + type} />;
      case "email":
        return <InputFieldGeneral type={"profile_" + type} />;
      case "address":
        return (
          <>
            <InputFieldGeneral type={"profile_" + type + "_1"} />
            <InputFieldGeneral type={"profile_" + type + "_2"} />
          </>
        );

      default:
        break;
    }
  };

  return <div className="formComponentItemsColumn">{render()}</div>;
}

export default EditProfileForm;
