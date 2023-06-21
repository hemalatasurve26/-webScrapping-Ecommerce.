import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="titlebar">
        <span style={{ color: "white" }}>
          E-commerce<span style={{ color: "gold" }}>easy</span>
          <span
            style={{
              paddingLeft: "1000px",
              fontSize: "20px",
            }}
          >
            Cart
          </span>
        </span>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
