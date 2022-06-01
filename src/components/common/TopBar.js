import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ProfileBoxClickable } from "./ProfileBox";

import "./css/TopBar.css";

function TopBarLink(props) {
  const link = props.link;
  const title = props.title;
  const path = props.path;

  if (path === link) {
    return (
      <Link to={link}>
        <div className="topBarNavigateLink active">{title}</div>
      </Link>
    );
  } else {
    return (
      <Link to={link}>
        <div className="topBarNavigateLink">{title}</div>
      </Link>
    );
  }
}

function TopBar(props) {
  //inherited props
  const isLoggedIn = props.isLoggedIn;
  const profile = props.profile;

  //own props
  const location = useLocation();
  const imgUrl = profile && profile.imgUrl;
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    isLoggedIn && (
      <div id="topBarContainer">
        <div className="topBarItem" id="topBarLogo">
          Day Logger
        </div>
        <div className="topBarItem" id="topBarNavigate">
          <TopBarLink link="/logday" title="Log Day" path={path} />
          <TopBarLink link="/edit" title="Edit Question" path={path} />
          <TopBarLink link="/viewdata" title="View Data" path={path} />
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
