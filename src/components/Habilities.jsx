import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Habilities = () => {
  return (
    <>
      <section>
        <h2 className="text-center font-green-light">Habilities</h2>
        <br />
        <Row>
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
              <li>Intermediate/Advanced English</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Habilities;
