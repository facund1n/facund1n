import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Habilities = () => {
  return (
    <>
      <section id="habilities">
        <h2 className="text-center font-green-light">Habilities</h2>
        <br />
        <Container>
          <Row className="p-2">
            <Col lg={4}>
              <ul>
                <li>Team Work</li>
                <li>Active Listening</li>
                <li>Analytical thinking</li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul>
                <li>Attentive</li>
                <li>Analytical thinking</li>
                <li>Pedagogical</li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul>
                <li>Disposition</li>
                <li>Adaptation</li>
                <li>Intermediate-Advanced English</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Habilities;
