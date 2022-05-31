import "./css/ProfileBox.css";

import defaultImage from "../../assets/default.png";

import { Link } from "react-router-dom";

function ProfileBox(props) {
  const value = props.value;

  return (
    <img className="profileBox" alt="someUrl" src={value || defaultImage} />
  );
}

function ProfileBoxClickable(props) {
  const value = props.value;

  return (
    <Link style={{ margin: "auto" }} to={"/profile"}>
      <img className="profileBox" alt="someUrl" src={value || defaultImage} />
    </Link>
  );
}

export { ProfileBox, ProfileBoxClickable };
