import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Brush,
  AreaChart,
  Area,
} from "recharts";

import { dateTo8DStrHyphen } from "../../../../utils/helper";

function formatData(data) {
  const newData = [];
  data.forEach((d) => {
    newData.push({
      date: dateTo8DStrHyphen(new Date(d.date)),
      answer: parseInt(d.answer),
    });
  });
  return newData;
}

function DataNumber(props) {
  //inherited props
  const loggedData = props.loggedData;

  //own props
  const question = loggedData.question;
  const text = question.text;
  const type_of_question = question.type_of_question;
  const answers = loggedData.answers.sort((a, b) => (a.date > b.date ? 1 : -1));
  const formattedAnswers = formatData(answers);

  return (
    <div className="column">
      <h3>{text}</h3>
      <div className="line-chart-wrapper">
        <LineChart
          width={500}
          height={300}
          data={formattedAnswers}
          margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis height={70} dataKey="date" label={text} />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip
            wrapperStyle={{
              borderColor: "white",
              boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
            }}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            labelStyle={{ fontWeight: "bold", color: "#666666" }}
          />
          <Line dataKey="answer" stroke="#ff7300" dot={false} />
          <Brush
            dataKey="date"
            startIndex={Math.floor(formattedAnswers.length / 2)}
          >
            <AreaChart>
              <CartesianGrid />
              <YAxis hide domain={["auto", "auto"]} />
              <Area
                dataKey="answer"
                stroke="#ff7300"
                fill="#ff7300"
                dot={false}
              />
            </AreaChart>
          </Brush>
        </LineChart>
      </div>
    </div>
  );
}

export default DataNumber;
