// SE DEBERÁ USAR ROUTER, DE MOMENTO MOCKEAMOS

import Container from "react-bootstrap/Container";

const Social = () => {
  return (
    <Container className="d-flex justify-content-center my-1">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="fb.png"
          height="40px"
          className="d-inline-block align-top"
        />
      </a>{" "}
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="ig.png"
          height="40px"
          className="d-inline-block align-top mx-2"
        />
      </a>{" "}
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="tw.png"
          height="40px"
          className="d-inline-block align-top"
        />
      </a>
    </Container>
  );
};

export default Social;
