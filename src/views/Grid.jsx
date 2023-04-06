import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Description from "../components/Description";
import ProfileImg from "../components/ProfileImg";
import Header from "./Header";
import Tecnologies from "../components/Tecnologies";
import Experiencie from "../components/Experiencie";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Grid = () => {
  return (
    <Container className="my-2">
      <Row>
        <Header />
      </Row>
      <hr />
      <Row>
        <Col lg={3}>
          <ProfileImg />
          <Contact />
        </Col>
        <Col lg={9}>
          <Description />
          <hr />
          <Tecnologies />
          <hr />
          <Experiencie />
          <hr />
          <Education />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Grid;
