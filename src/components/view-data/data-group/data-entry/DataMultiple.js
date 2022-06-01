import { BarChart, XAxis, YAxis, Tooltip, Bar, LabelList } from "recharts";

function makeTally(data) {
  //unique filter
  function onlyUnique(v, i, s) {
    return s.indexOf(v) === i;
  }

  const onlyAnswers = [];
  data.forEach((d) => {
    onlyAnswers.push(d.answer);
  });

  const uniqueAnswers = onlyAnswers.filter(onlyUnique);

  const tally = [];
  uniqueAnswers.forEach((a) => {
    tally.push({ answer: a, count: 0 });
  });

  onlyAnswers.forEach((a) => {
    const idx = tally.findIndex((t) => t.answer === a);
    if (idx !== -1) {
      tally[idx].count += 1;
    }
  });

  return tally;
}

function DataMultiple(props) {
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
      <div className="area-chart-wrapper">
        <BarChart
          width={500}
          height={300}
          data={makeTally(answers)}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          layout="vertical"
        >
          <XAxis height={70} type="number" label={text} />
          <YAxis dataKey="answer" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#387908">
            <LabelList position="right" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}

export default DataMultiple;
