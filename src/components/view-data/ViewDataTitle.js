import { ButtonToggle } from "../common/Button";

import "../common/css/FormComponent.css";

function ViewDataTitle(props) {
  const toggleViewData = props.toggleViewData;
  const setToggleViewData = props.setToggleViewData;

  const onClick = () => {
    setToggleViewData(!toggleViewData);
  };

  return (
    <div className="formTitle">
      <div>View Data</div>
      <ButtonToggle onClick={onClick} value={toggleViewData} />
    </div>
  );
}

export default ViewDataTitle;
