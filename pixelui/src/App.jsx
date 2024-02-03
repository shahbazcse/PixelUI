import "./App.css";

import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import NonDesktopPage from './components/NonDesktopPage';
import NavBarMobile from "./components/NavBar-Mobile/NavBarMobile";
import ComponentsMenu from "./components/ComponentsMenu";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <>
      {/* <div className="nondesktop">
        <NonDesktopPage />
      </div> */}
      <NavBarMobile />
      <div className="App">
        <NavBar />
        <div className="sidebar_main">
          <ComponentsMenu />
          <div className="main">
            <AppRoutes />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
