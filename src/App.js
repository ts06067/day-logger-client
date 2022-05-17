import "./App.css";

import {
  BrowserRouter as Router,
  useNavigate,
  useRoutes,
} from "react-router-dom";

//pages
import PageLogDay from "./pages/PageLogDay";
import PageEdit from "./pages/PageEdit";
import PageViewData from "./pages/PageViewData";
import PageLogIn from "./pages/PageLogIn";
import PageProfile from "./pages/PageProfile";
import PageAdmin from "./pages/PageAdmin";

//components
import TopBar from "./components/TopBar";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/logIn", element: <PageLogIn /> },
    { path: "/logDay", element: <PageLogDay /> },
    { path: "/edit", element: <PageEdit /> },
    { path: "/viewData", element: <PageViewData /> },
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
