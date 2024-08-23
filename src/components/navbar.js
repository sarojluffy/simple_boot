import { Navbar, Container } from "react-bootstrap";

const Nabbar = () => {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Onepiece
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end d-grid gap-3">
          <Navbar.Text className="text-light">contact </Navbar.Text>
          <Navbar.Text className="text-light">about</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Nabbar;
