import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Slide } from "react-reveal";
import "./Body2.css";

const Body2 = () => {
  return (
    <div className="div-main">
      <div className="div-first">
        <Row>
          <Col className="div-c">
            Making Financial Services More Accessible For You
          </Col>
        </Row>
        <Row>
          <Col className="col-jy">
            RoseBank gives you the freedom to make quick and easy payments,
            spend smart, and save more.
          </Col>
        </Row>
        <div className="gor">
          <Image
            className="img-colt"
            src="data:image/png;base64,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"
            alt="df"
          />

          <Image
            className="img-colt2"
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            alt="ht"
          />
        </div>
      </div>
      <div className="div-second">
        <Slide left>
          <Image
            className="img-2"
            src="https://i.pinimg.com/originals/b8/e9/12/b8e9122c661b6c6914437e37cb7938e0.png"
            alt="ty"
            fluid
          />
        </Slide>
      </div>
    </div>
  );
};

export default Body2;
