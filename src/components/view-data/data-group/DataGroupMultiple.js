import DataMultiple from "./data-entry/DataMultiple";

function DataGroupMultiple(props) {
  const loggedDataByMCQArr = props.loggedDataByMCQArr;

  return (
    <div className="formComponent column">
      {loggedDataByMCQArr.map((ld) => (
        <DataMultiple key={ld.question._id} loggedData={ld} />
      ))}
    </div>
  );
}

export default DataGroupMultiple;
