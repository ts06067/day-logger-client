import DataMultiple from "./data-entry/DataMultiple";

function DataGroupMultiple(props) {
  const loggedDataByMCQArr = props.loggedDataByMCQArr;

  return (
    <div className="formComponentItemsColumn">
      {loggedDataByMCQArr.map((ld) => (
        <DataMultiple key={ld.question._id} loggedData={ld} />
      ))}
    </div>
  );
}

export default DataGroupMultiple;
