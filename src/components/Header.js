import {Container, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = ()=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/page-not-found">Page not found</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header