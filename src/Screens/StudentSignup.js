import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "../Components/FormContainer";

import CircularIndeterminate from "../Components/Progress";
import axios from "axios";
import Footer from "../Pages/Footer";

toast.configure();

const StudentSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userref, setUserref] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem("user-info")) {
    //   navigate("/homescreen");
    // }
  }, []);
  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };
  const handleClick2 = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      phone: phone,
      userref: userref,
      name: name,
      password: password,
      confirmpassword: confirmpassword,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      // "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("/api/users", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.hasError === false) {
          setEmail("");
          setPhone("");
          setUserref("");
          setName("");
          setPassword("");
          setConfirmpassword("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));
          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);
          localStorage.setItem("id", res.data._id);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("phoneNumber", res.data.phone);
          localStorage.setItem("AccountNumber", res.data.account_number);
          localStorage.setItem("AccountBalance", res.data.account_balance);
          localStorage.setItem("userRef", res.data.userRef);

          console.log(res.data);
          toast.success("Sign Up successful");
          navigate("/dashboard");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Sign Up failed");
      });
  };

  return (
    <div>
      <FormContainer>
        <h1>Sign Up</h1>
        {loading && <CircularIndeterminate />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Student Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full Name  "
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="registrationNumber">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email Address  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Enter Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your PhoneNumber  "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="userRef">
            <Form.Label>Account Officer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Who is your Account Officer  "
              value={userref}
              onChange={(e) => setUserref(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={mode}
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            {mode === "password" ? (
              <VisibilityIcon className="icon" onClick={handleClick} />
            ) : (
              <VisibilityOff className="icon" onClick={handleClick} />
            )}
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={mode}
              required
              placeholder="Enter password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            ></Form.Control>
            {mode === "password" ? (
              <VisibilityIcon className="icon2" onClick={handleClick2} />
            ) : (
              <VisibilityOff className="icon2" onClick={handleClick2} />
            )}
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already A User?<Link to="/login">Login </Link>{" "}
          </Col>
        </Row>
      </FormContainer>
      <Footer />
    </div>
  );
};

export default StudentSignup;
