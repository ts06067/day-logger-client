import DataBoolean from "./data-entry/DataBoolean";

function DataGroupBoolean(props) {
  const loggedDataByBooleanQArr = props.loggedDataByBooleanQArr;

  return (
    <div className="formComponent column">
      {loggedDataByBooleanQArr.map((ld) => (
        <DataBoolean key={ld.question._id} loggedData={ld} />
      ))}
    </div>
  );
}

export default DataGroupBoolean;
