import { InputField } from "../../components/common/InputField";

function LogInForm(props) {
  //inherited props
  const formData = props.formData;
  const onChange = props.onChange;

  //own props
  const { email, password } = formData;

  return (
    <div className="formComponent column">
      <span>ID</span>
      <InputField name={"email"} value={email} onChange={onChange} />
      <span>Password</span>
      <InputField name={"password"} value={password} onChange={onChange} />
    </div>
  );
}

export default LogInForm;
