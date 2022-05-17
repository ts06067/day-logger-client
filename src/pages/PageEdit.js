import {
  FormDefault,
  FormEditQuestionTitle,
  FormEditQuestionUserQuery,
  FormSave,
} from "../components/FormComponent";

function PageEdit() {
  return (
    <div>
      <FormEditQuestionTitle />
      <FormEditQuestionUserQuery />
      <FormSave />
    </div>
  );
}

export default PageEdit;
