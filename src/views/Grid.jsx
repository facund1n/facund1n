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
import Habilities from "../components/Habilities";
import GallerySlider from "../components/GallerySlider";
import Footer from "../components/Footer";

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
          <br />
          <Description />
          <Contact />
        </Col>
        <Col lg={9}>
          <Tecnologies />
          <hr />
          <Habilities />
          <hr />
          <Experiencie />
          <hr />
          <Education />
          <hr />
        </Col>
      </Row>
      <GallerySlider />
      <Footer />
    </Container>
  );
};

export default Grid;
