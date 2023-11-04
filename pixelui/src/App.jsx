import "./App.css";

import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
