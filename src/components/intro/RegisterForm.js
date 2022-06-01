import { InputField } from "../../components/common/InputField";

function RegisterForm(props) {
  //inherited props
  const formData = props.formData;
  const onChange = props.onChange;

  //own props
  const { name } = formData;

  return (
    <div className="formComponent column">
      <h3>What is your name?</h3>
      <InputField name={"name"} value={name} onChange={onChange} />
    </div>
  );
}

export default RegisterForm;
