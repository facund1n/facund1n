import Image from "../components/ProfileImg.jsx";
import Intro from "../components/Intro.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <Row className="parallax container">
        <Col lg={4}>
          <Image />
        </Col>
        <Col lg={8}>
          <Intro />
        </Col>
      </Row>
    </>
  );
};

export default Header;
