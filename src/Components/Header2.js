import React from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Header.css";

const Header2 = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          background: "white",
        }}
      >
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            <Navbar.Brand
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textDecoration: "none",
              }}
            >
              RoseBank
            </Navbar.Brand>{" "}
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Account</Nav.Link>
              <Nav.Link>Business</Nav.Link>

              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item>Company</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Col
                style={{
                  display: "flex",
                  float: "right",
                  justifyContent: "right",
                  justifyItems: "right",
                  alignItems: "right",
                  position: "relative",
                  right: "-620px",
                }}
              >
                <Link to="/login">
                  {" "}
                  <Nav.Link
                    href="#link"
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      display: "flex",
                      float: "right",
                    }}
                  >
                    Login
                  </Nav.Link>
                </Link>{" "}
                <Nav.Link
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    display: "flex",
                    justifyItems: "center",
                    color: "white",
                    float: "right",
                    border: "1px solid transparent",
                    width: "130px",
                    borderRadius: "8px",
                    height: "50px",
                    textAlign: "center",
                    alignItems: "center",
                    background: "#301934",
                  }}
                >
                  <Link to="/dashboard">Dashboard</Link>
                </Nav.Link>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header2;
