import "./css/ProfileBox.css";

import defaultImage from "../../assets/default.png";

import { Link } from "react-router-dom";

function ProfileBox(props) {
  const value = props.value;

  return (
    <img className="profileBox" alt="someUrl" src={value || defaultImage} />
  );
}

function ProfileBoxClickable() {
  return (
    <Link className="profileBox" to={"/profile"}>
      <img alt="someUrl" src="someUrl" />
    </Link>
  );
}

export { ProfileBox, ProfileBoxClickable };
