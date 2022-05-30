import "./css/TopBar.css";

import { Link, useLocation } from "react-router-dom";
import { ProfileBoxClickable } from "./ProfileBox";

function TopBar(props) {
  //inherited props
  const isLoggedIn = props.isLoggedIn;
  const profile = props.profile;

  //own props
  const location = useLocation();
  const imgUrl = profile && profile.imgUrl;

  return (
    isLoggedIn && (
      <div id="topBarContainer">
        <div className="topBarItem" id="topBarLogo">
          Day Logger
        </div>
        <div className="topBarItem" id="topBarNavigate">
          <Link to={"/logday"}>
            <div className="topBarNavigateLink">
              <div className="topBarNavigateLinkText">Log Day</div>
            </div>
          </Link>

          <Link to={"/edit"}>
            <div className="topBarNavigateLink">
              <div className="topBarNavigateLinkText">Edit Questions</div>
            </div>
          </Link>

          <Link to={"/viewdata"}>
            <div className="topBarNavigateLink">
              <div className="topBarNavigateLinkText">View Data</div>
            </div>
          </Link>
        </div>

        <div className="topBarItem">
          <div id="topBarProfile">
            <ProfileBoxClickable value={imgUrl} />
          </div>
        </div>
      </div>
    )
  );
}

export default TopBar;
