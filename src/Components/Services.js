import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div
      className="div-main"
      style={{
        display: "flex",
        justifyContinent: "space-between",
        textAlign: "center",
        height: "40vh",
        borderSpacing: "20px",
      }}
    >
      <div style={{ border: "1px solid purple" }}>
        <Row>
          <Col>Open an Account</Col>
        </Row>
        <Row>
          <Col>
            Save at competitive interest rates with flexible withdrawals
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "transparent",
                color: "#3d65b8",
              }}
            >
              LEARN MORE{" "}
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ border: "1px solid purple" }}>
        <Row>
          <Col>Apply for a Loan</Col>
        </Row>
        <Row>
          <Col>
            RoseBank offers a wide range of loans to make your vision a reality
          </Col>
        </Row>
        <Row>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              color: "#3d65b8",
            }}
          >
            LEARN MORE{" "}
          </Button>
        </Row>
      </div>
      <div style={{ border: "1px solid purple" }}>
        <Row>
          <Col>24/7 Banking</Col>
        </Row>
        <Row>
          <Col>
            360 banking platforms that provides safe access to banking services
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "transparent",
                color: "#3d65b8",
              }}
            >
              LEARN MORE{" "}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
