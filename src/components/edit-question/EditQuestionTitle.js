import { ButtonAdd } from "../common/Button";

import "../common/css/FormComponent.css";

function EditQuestionTitle(props) {
  const addQuestion = props.addQuestion;

  return (
    <div className="formTitle">
      <div>Edit Questions</div>
      <ButtonAdd onClick={addQuestion} />
    </div>
  );
}

export { EditQuestionTitle };
