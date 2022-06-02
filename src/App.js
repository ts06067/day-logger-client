import "./App.css";

import { useState } from "react";

import { BrowserRouter as Router, Navigate, useRoutes } from "react-router-dom";

//pages
import PageLogDay from "./pages/log-day/PageLogDay";
import PageEdit from "./pages/edit-question/PageEdit";
import PageViewData from "./pages/view-data/PageViewData";
import PageLogIn from "./pages/intro/PageLogIn";
import PageProfile from "./pages/profile/PageProfile";
import PageAdmin from "./pages/admin/PageAdmin";

//components
import TopBar from "./components/common/TopBar";

function AppRoutes(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const profile = props.profile;
  const setProfile = props.setProfile;

  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <PageLogIn setIsLoggedIn={setIsLoggedIn} />,
    },
    { path: "/logday", element: <PageLogDay /> },
    { path: "/edit", element: <PageEdit /> },
    { path: "/viewdata", element: <PageViewData /> },
    {
      path: "/profile",
      element: (
        <PageProfile
          profile={profile}
          setProfile={setProfile}
          setIsLoggedIn={setIsLoggedIn}
        />
      ),
    },
    { path: "/admin", element: <PageAdmin /> },
  ]);
  return routes;
}

function App() {
  const [profile, setProfile] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );

  return (
    <div className="App">
      <Router>
        <TopBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          profile={profile}
        />
        <AppRoutes
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          profile={profile}
          setProfile={setProfile}
        />
      </Router>
    </div>
  );
}

export default App;
