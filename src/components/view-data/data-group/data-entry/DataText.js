import { dateTo8DStrHyphen } from "../../../../utils/helper";

function DataText(props) {
  //inherited props
  const loggedData = props.loggedData;

  //own props
  const question = loggedData.question;
  const text = question.text;
  const type_of_question = question.type_of_question;
  const answers = loggedData.answers;

  return (
    <div className="column">
      <h3>{text}</h3>
      {answers.map((a) => (
        <span key={a._id}>
          {dateTo8DStrHyphen(new Date(a.date)) + ": " + a.answer}
        </span>
      ))}
    </div>
  );
}

export default DataText;
