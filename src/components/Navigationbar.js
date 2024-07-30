import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.png'
import { Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import './Navigationbar.css'

function Navigationbar() {
  return (
    <>
    <Navbar expand="lg" bg="custom" style = {{zIndex:"100"}}>
   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Brand>
            <img src={Logo} height="60vh" style={{margin: "0", marginRight: "1vw"}}/>
        </Navbar.Brand>
        
        <Container fluid style={{}}>
      <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as = {Link} to = {"/"} className = "px-5"> <p className='link'> Home </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/about"} className = "px-5"> <p className='link'> About </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/classes"} className = "px-5"> <p className='link'> Classes </p> </Nav.Link>
            </Nav>

      { // <Button variant="outline-success" style={{width: "7vw", marginRight: "1vw"}} href="https://forms.gle/E4NAW9CaYjqUnMsq7"> Apply! </Button> 
      }
      </Navbar.Collapse>
          </Container>
      </Navbar>

      </>
  );
}

export default Navigationbar;
