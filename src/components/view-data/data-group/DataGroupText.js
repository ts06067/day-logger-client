import DataText from "./data-entry/DataText";

function DataGroupText(props) {
  const loggedDataByTextQArr = props.loggedDataByTextQArr;

  return (
    <div className="column">
      {loggedDataByTextQArr.map((ld) => (
        <DataText key={ld.question._id} loggedData={ld} />
      ))}
    </div>
  );
}

export default DataGroupText;
