import "./App.css";

import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import NavBarMobile from "./components/NavBar-Mobile/NavBarMobile";
import ComponentsMenu from "./components/ComponentsMenu";

function App() {
  return (
    <>
      <NavBarMobile />
      <div className="App">
        <NavBar />
        <div className="sidebar_main">
          <ComponentsMenu />
          <div className="main">
            <AppRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
