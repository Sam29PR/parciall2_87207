import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../../assets/img/logo.png';
 
 
export const Cabecera = ()  => {
  return (
    
    <Navbar bg="primary" variant="dark" expand="lg">
        <a className="navbar-brand" href="#">
            <img
              src={logo} 
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            Free Mind
          </a>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features">
            <Nav.Link>Editoriales</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Revistas" id="pricing-dropdown">
            <LinkContainer to="/pricing/register">
              <NavDropdown.Item>Registrar Revistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/pricing/list">
              <NavDropdown.Item>Listar Revistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/pricing/admin">
              <NavDropdown.Item>Administrar Revistas</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/Acerca">
            <Nav.Link>Quienes somos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
export default Cabecera;
 