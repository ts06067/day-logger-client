import "../../common/css/FormComponent.css";

import { ButtonRemoveImage } from "../../common/Button";
import { ProfileBox } from "../../common/ProfileBox";
import { InputFieldImage } from "../../common/InputField";

function EditImageForm(props) {
  //inherited props
  const name = props.name;
  const formData = props.formData;
  const setFormData = props.setFormData;
  const setImgToUpload = props.setImgToUpload;

  //own props
  const imgUrl = formData.imgUrl;

  const handleFileChange = (e) => {
    const target = e.target;
    const fileArr = target.files;

    if (fileArr && fileArr[0]) {
      const newImg = fileArr[0];
      const newFormData = { ...formData, imgUrl: URL.createObjectURL(newImg) };
      setFormData(newFormData); //update url
      setImgToUpload(newImg); //update file
    }
  };

  const removeImage = () => {
    const newFormData = { ...formData, imgUrl: "" };
    setFormData(newFormData);
    setImgToUpload(null);
  };

  return (
    <div className="formComponentItem">
      <p>Profile Photo</p>
      <div className="formProfileEditContainer">
        <ProfileBox value={imgUrl} />
        <InputFieldImage name={name} onChange={handleFileChange} />
        <ButtonRemoveImage onClick={removeImage} />
      </div>
    </div>
  );
}

export { EditImageForm };
