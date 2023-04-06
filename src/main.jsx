import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Header from "./views/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Tecnologies from "./components/Tecnologies";
import Experiencie from "./components/Experiencie";
import Habilities from "./components/Habilities";
import Education from "./components/Education";
import Grid from "./views/Grid";
import { Container } from "react-bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Container fluid className="parallax">
      <div>
        <Grid />
      </div>
    </Container>
  </React.StrictMode>
);
