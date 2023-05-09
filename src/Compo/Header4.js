import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Header4.css";
const Header4 = () => {
  return (
    <div>
      <Navbar className="div-man">
        <Container>
          {" "}
          <Navbar.Brand href="#home" className="puyol">
            RoseBank
          </Navbar.Brand>{" "}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <Navbar.Text className="puyol-h3">Login</Navbar.Text>{" "}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header4;
