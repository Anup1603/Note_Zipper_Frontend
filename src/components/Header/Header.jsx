import React from "react";
import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";
import {} from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ setSearch }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        {/* <Navbar.Brand href="/">Note Zipper</Navbar.Brand> */}
        <Navbar.Brand>
          <img
            style={{ width: "2rem", marginRight: "0.2rem" }}
            src="/note.png"
            alt="Notes Zipper Logo"
          />
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Note_Zipper
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>

          {userInfo ? (
            <Nav>
              <Nav.Link as={Link} to="/mynotes">
                My Notes
              </Nav.Link>

              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

              <div>
                <Image
                  src={`${userInfo.pic}`}
                  roundedCircle
                  thumbnail
                  style={{ width: "50px", height: "50px" }}
                  alt="Profile Picture"
                />
              </div>
            </Nav>
          ) : (
            <Nav>
              {" "}
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
