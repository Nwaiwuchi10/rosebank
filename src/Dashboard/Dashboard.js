import React from "react";
import "./Dashboard.css";

import { Col, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h2 className="h2-h">Dashboard</h2>
      <div className="div-main">
        <div className="div-branch">
          <Row>
            <Col className="div-col1">Account Balance</Col>
          </Row>
          <Row>
            <Col className="div-col2">
              <span>&#8358;</span>

              {localStorage.getItem("AccountBalance")}
            </Col>
          </Row>

          <span className="div-col3">Account Name:</span>
          <span className="span">{localStorage.getItem("name")}</span>
          <div className="div-col4">
            <span>{localStorage.getItem("AccountNumber")}</span>
            <span>-RoseBank</span>{" "}
          </div>

          <Row>
            <Col>
              Transfer to this account number & fund your account instantly.
            </Col>
          </Row>
        </div>
        <div className="hr"></div>
        <div className="div-branch2">
          <Row>
            <Col className="div-col1">Promo Commision</Col>
          </Row>
          <Row>
            <Col className="div-col2">
              <span>&#8358;</span>
              10.00
            </Col>
          </Row>

          <span className="div-col3">
            Enjoy up to 25% cash back on deposit & bills paymnet
          </span>

          <Row>
            <Col className="div-col5">See More</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
