import "./App.css";

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

function AppRoutes() {
  const routes = useRoutes([
    { path: "/login", element: <PageLogIn /> },
    { path: "/logday", element: <PageLogDay /> },
    { path: "/edit", element: <PageEdit /> },
    { path: "/viewdata", element: <PageViewData /> },
    { path: "/profile", element: <PageProfile /> },
    { path: "/admin", element: <PageAdmin /> },
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
