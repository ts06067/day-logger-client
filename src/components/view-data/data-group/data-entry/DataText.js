function DataText(props) {
  //inherited props
  const loggedData = props.loggedData;

  //own props
  const question = loggedData.question;
  const text = question.text;
  const type_of_question = question.type_of_question;
  const answers = loggedData.answers;

  return (
    <div className="formComponentItemsColumn">
      <h3>{text}</h3>
      {answers.map((a) => (
        <p key={a._id}>{a.date + "/" + a.answer}</p>
      ))}
    </div>
  );
}

export default DataText;
