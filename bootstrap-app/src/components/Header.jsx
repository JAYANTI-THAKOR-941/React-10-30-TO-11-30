import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark p-4">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>Bootstrap-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white' >Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Services</Nav.Link>
            <NavDropdown title= {<span className="text-white">Courses</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item  href="#action3">
                Full Stack Development
              </NavDropdown.Item>
               <NavDropdown.Item href="#action4">
                UI & UX Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                AI / ML Data Science
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='text-white' >
              About Us
            </Nav.Link>
             <Nav.Link href="#" className='text-white' >
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;