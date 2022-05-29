import "./App.css";

import { useState } from "react";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

//pages
import PageLogDay from "./pages/log-day/PageLogDay";
import PageEdit from "./pages/edit-question/PageEdit";
import PageViewData from "./pages/view-data/PageViewData";
import PageLogIn from "./pages/intro/PageLogIn";
import PageProfile from "./pages/profile/PageProfile";
import PageAdmin from "./pages/intro/PageAdmin";

//components
import TopBar from "./components/common/TopBar";

function AppRoutes(props) {
  const profile = props.profile;
  const setProfile = props.setProfile;

  const routes = useRoutes([
    {
      path: "/login",
      element: <PageLogIn setProfile={setProfile} />,
    },
    { path: "/logday", element: <PageLogDay /> },
    { path: "/edit", element: <PageEdit /> },
    { path: "/viewdata", element: <PageViewData /> },
    {
      path: "/profile",
      element: <PageProfile profile={profile} setProfile={setProfile} />,
    },
    { path: "/admin", element: <PageAdmin /> },
  ]);
  return routes;
}

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <div className="App">
      <Router>
        <TopBar profile={profile} />
        <AppRoutes profile={profile} setProfile={setProfile} />
      </Router>
    </div>
  );
}

export default App;
