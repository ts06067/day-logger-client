import { ButtonDelete } from "../common/Button";

function AdminForm(props) {
  //inherited props
  const stat = props.stat;
  const deleteUser = props.deleteUser;

  //own props
  const { user, numQuestionEntries, numLoggedDataEntries } = stat;
  const { _id, name, email } = user;

  return (
    <div className="formComponent column padded rounded white">
      <div className="row spaceBetween marginTop">
        <h1>{name}</h1>
        <ButtonDelete onClick={deleteUser} idToDelete={_id} />
      </div>
      <span className="marginTop">Email: {email}</span>
      <span>Number of Questions: {numQuestionEntries}</span>
      <span>Number of Responses: {numLoggedDataEntries}</span>
    </div>
  );
}

export default AdminForm;
