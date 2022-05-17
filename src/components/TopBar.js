import "./css/TopBar.css";

import { Link } from "react-router-dom";
import { ProfileBoxClickable } from "./ProfileBox";

function TopBar() {
  return (
    <div id="topBarContainer">
      <div className="topBarItem" id="topBarLogo">
        Day Logger
      </div>
      <div className="topBarItem" id="topBarNavigate">
        <Link to={"/logDay"}>
          <div className="topBarNavigateLink">
            <div className="topBarNavigateLinkText">Log Day</div>
          </div>
        </Link>

        <Link to={"/edit"}>
          <div className="topBarNavigateLink">
            <div className="topBarNavigateLinkText">Edit Questions</div>
          </div>
        </Link>

        <Link to={"/viewData"}>
          <div className="topBarNavigateLink">
            <div className="topBarNavigateLinkText">View Data</div>
          </div>
        </Link>
      </div>

      <div className="topBarItem">
        <div id="topBarProfile">
          <ProfileBoxClickable />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
