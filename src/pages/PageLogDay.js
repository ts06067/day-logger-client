import {
  FormDefault,
  FormDateSelect,
  FormSubmit,
  FormUserQuery,
} from "../components/FormComponent";

function PageLogDay() {
  return (
    <div className="pageLogDayContainer">
      <FormDateSelect />
      <FormUserQuery />
      <FormDefault />
      <FormSubmit />
    </div>
  );
}

export default PageLogDay;
