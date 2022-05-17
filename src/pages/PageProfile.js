import {
  FormDefault,
  FormEditProfileImage,
  FormEditProfileTitle,
  FormSaveLogOut,
  FormUserQuery,
} from "../components/FormComponent";

function PageProfile() {
  return (
    <div>
      <FormEditProfileTitle />
      <FormEditProfileImage />
      <FormUserQuery />
      <FormUserQuery />
      <FormUserQuery />
      <FormUserQuery />
      <FormSaveLogOut />
    </div>
  );
}

export default PageProfile;
