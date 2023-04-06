import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Grid from "./views/Grid";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Container className="my-2">
      <div>
        <Grid />
      </div>
    </Container>
  </React.StrictMode>
);
