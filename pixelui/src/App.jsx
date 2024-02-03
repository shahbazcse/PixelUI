import "./App.css";

import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import NonDesktopPage from './components/NonDesktopPage';
import ComponentsMenu from "./components/ComponentsMenu";

function App() {
  return (
    <>
      {/* <div className="nondesktop">
        <NonDesktopPage />
      </div> */}
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
