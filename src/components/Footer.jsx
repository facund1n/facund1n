import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <hr />
      <Container className="py-4 text-center">
        <span>Facundo Samuel Sanchez</span>
        <br />
        <span>© copyright - 2023</span>
        <br />
        <a href="https://github.com/facund1n/" className="f-yellow">
          https://github.com/facund1n/
        </a>
      </Container>
    </>
  );
};

export default Footer;
