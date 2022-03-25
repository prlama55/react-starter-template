import {Container, NavDropdown, Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = ()=>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap starter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="#home">Home</Nav.Link>
                        <NavDropdown title="Users" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/users">User List</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/action/3.2">Create User</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item>*/}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Login</Button>
                    </Form>
                    <Nav>
                        <Nav.Link as={Link} to="/deets">Register</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link as={Link} to="/deets">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header