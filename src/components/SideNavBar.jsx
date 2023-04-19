import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const SideNavBar = () => {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column text-end sidebar"
      sticky="top"
    >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#technologies">Technologies</Nav.Link>
      <Nav.Link href="#habilities">Habilities</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    </Nav>
  );
};

export default SideNavBar;
