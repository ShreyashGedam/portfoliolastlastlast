import styles from "../../styles/navbar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Navbar2 = () => {

    const scroll_1 = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const scroll_2 = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={scroll_1} className='navs'>Home</Nav.Link>
                        <Nav.Link href="#about" className='navs' >About Me</Nav.Link>
                        <Nav.Link href="#projects" className='navs'>Projects</Nav.Link>
                        <Nav.Link onClick={scroll_2} className='navs'>Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}