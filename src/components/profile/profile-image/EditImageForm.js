import { ButtonRemoveImage, ButtonUnderLine } from "../../common/Button";
import { ProfileBox } from "../../common/ProfileBox";
import { InputFieldImage } from "../../common/InputField";

import "../../common/css/FormComponent.css";
import "../css/ProfileForm.css";

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
    <div className="formContainer column padded rounded white">
      <span className="profileFormTitle">Profile photo</span>
      <div className="row spaceBetween alignCenter marginTop">
        <ProfileBox value={imgUrl} />
        <InputFieldImage name={name} onChange={handleFileChange} />
        <ButtonUnderLine onClick={removeImage} title="Remove Image" />
      </div>
    </div>
  );
}

export { EditImageForm };
