import DataNumber from "./data-entry/DataNumber";

function DataGroupNumber(props) {
  const loggedDataByNumberQArr = props.loggedDataByNumberQArr;

  return (
    <div className="formComponent column">
      {loggedDataByNumberQArr.map((ld) => (
        <DataNumber key={ld.question._id} loggedData={ld} />
      ))}
    </div>
  );
}

export default DataGroupNumber;
