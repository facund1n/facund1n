import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Header from "./views/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <div className="container">
      <Header />
    </div>
  </React.StrictMode>
);
