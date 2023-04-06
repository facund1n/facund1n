import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tecnologies = () => {
  return (
    <>
      <section>
        <h2 className="text-center font-green-light">Technologies</h2>
        <br />
        <Row>
          <Col lg={4}>
            <ul>
              <li>Visual Studio Code</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>GitHub</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li>Mongo DB</li>
              <li>Express</li>
              <li>Node</li>
              <li>React JS</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li>MS Office</li>
              <li>Photoshop</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Tecnologies;
