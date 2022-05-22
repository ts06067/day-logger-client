import "./css/ProfileBox.css";

import { Link } from "react-router-dom";

function ProfileBox() {
  return <img className="profileBox" alt="someUrl" src="someUrl" />;
}

function ProfileBoxClickable() {
  return (
    <Link className="profileBox" to={"/profile"}>
      <img alt="someUrl" src="someUrl" />
    </Link>
  );
}

export { ProfileBox, ProfileBoxClickable };
