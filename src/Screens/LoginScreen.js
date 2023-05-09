import React, { useState } from "react";
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

const LoginScreen = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("id")) {
  //     navigate(redirect);
  //   }
  // }, [navigate, redirect]);

  const handleClick = () => {
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

      password: password,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("/api/users/login", data, headers)
      .then((res) => {
        console.log(res.data.hasError === false);
        setLoading(false);
        if (res.data) {
          setEmail("");

          setPassword("");

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
          toast.success("Login successful");
          navigate("/dashboard");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Login failed");
      });
  };

  return (
    <div>
      <FormContainer>
        <h1>Login </h1>
        {loading && <CircularIndeterminate />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="registrationNumber">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Email  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <VisibilityIcon
                style={{
                  display: "flex",
                  position: "relative",
                  top: "-30px",
                  float: "right",
                  color: "black",
                }}
                onClick={handleClick}
              />
            ) : (
              <VisibilityOff onClick={handleClick} />
            )}
          </Form.Group>

          <Button type="submit" variant="primary">
            Login In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User?<Link to="/signup">Signup </Link>{" "}
            {/* New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Signup
          </Link> */}
          </Col>
        </Row>
      </FormContainer>
      <Footer />
    </div>
  );
};

export default LoginScreen;
