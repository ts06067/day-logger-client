import { ButtonAddQuestion } from "../common/Button";

function EditQuestionTitle(props) {
  const addQuestion = props.addQuestion;

  return (
    <div className="formEditTitle">
      <div>Edit Questions</div>
      <ButtonAddQuestion onClick={addQuestion} />
    </div>
  );
}

export { EditQuestionTitle };
