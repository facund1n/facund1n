import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Tecnologies = () => {
  return (
    <div className="bg-ligth-gray card-border p-3">
      <section id="technologies">
        <h2 className="text-center font-green-light ">Technologies</h2>
        <br />
        <Container>
          <Row className="p-2">
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
        </Container>
      </section>
    </div>
  );
};

export default Tecnologies;
