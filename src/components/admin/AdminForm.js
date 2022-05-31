import { ButtonDeleteQuestion } from "../common/Button";

function AdminForm(props) {
  //inherited props
  const stat = props.stat;
  const deleteUser = props.deleteUser;

  //own props
  const { user, numQuestionEntries, numLoggedDataEntries } = stat;
  const { _id, name, email } = user;

  return (
    <div className="formComponentItemsColumn">
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>Number of Questions: {numQuestionEntries}</p>
      <p>Number of Responses: {numLoggedDataEntries}</p>
      <ButtonDeleteQuestion onClick={deleteUser} idToDelete={_id} />
    </div>
  );
}

export default AdminForm;
