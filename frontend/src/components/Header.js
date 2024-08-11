import { useContext } from "react";
import { LoginContext } from "../App";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand shref="#home" className="text-white">
          PG Playground v0.1.13
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/newsoverview" className="text-white">
              News Overview
            </Nav.Link>
            <Nav.Link href="/addnewsarticle" className="text-white">
              Neuer Artikel
            </Nav.Link>

            {!loggedIn ? (
              <Nav.Link href="/login" className="text-white">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link href="/logout" className="text-white">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
