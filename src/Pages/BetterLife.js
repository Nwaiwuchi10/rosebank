import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import "./BetterLife.css";
const BetterLife = () => {
  return (
    <div className="div-min">
      <Row>
        <Col className="text-1a" style={{ marginTop: "75px" }}>
          A better life with RoseBank
        </Col>
      </Row>
      <div className="flex-div">
        <div className="div-div-img">
          <Row>
            <Col>
              <Image
                className="img"
                src="https://us.123rf.com/450wm/serezniy/serezniy1901/serezniy190113459/117991889-young-woman-with-credit-card-on-white-background-online-shopping.jpg?ver=6"
                alt="rt"
                fluid
              />{" "}
            </Col>
          </Row>
        </div>
        <div className="div-2">
          <Row>
            <Col className="top-col">Add Money, Make Transfers, Pay Bills</Col>
          </Row>
          <Row>
            <Col className="co-colt">
              Live your life on your terms and without limits. With an OPay
              account, you can add money to your wallet for free, within seconds
              and start making transfers to other wallets or any bank accounts
              for free.* Take control of how you make your bill and utility
              payments.
            </Col>
          </Row>
          <Button className="bt-button">LEARN MORE </Button>
        </div>
      </div>
      <div className="flex-div2">
        <div className="div-3">
          <Row>
            <Col className="me">Become a RoseBank Merchant</Col>
          </Row>
          <Row>
            <Col
              style={{
                fontSize: "17px ",
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              As a RoseBank Merchant, you have the power to make as much money
              as you can while providing financial services and helping your
              community grow. Join the RoseBank family now, get a free POS and
              start to scale your business. We offer the lowest charges in the
              market.
            </Col>
          </Row>
          <Button className="bt-button">LEARN MORE </Button>
        </div>
        <div className="div-div-img">
          <Row>
            <Col>
              <Image
                className="img"
                src="https://www.affordabledeals.ng/wp-content/uploads/2022/04/opay-android-pos-machine.jpg"
                alt="rt"
                fluid
              />{" "}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BetterLife;
