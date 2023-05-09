import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Body.css";

const Body = () => {
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
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png?20190913154415"
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
        <Image
          className="img-2"
          src="https://i.pinimg.com/originals/b8/e9/12/b8e9122c661b6c6914437e37cb7938e0.png"
          alt="ty"
        />
      </div>
    </div>
  );
};

export default Body;
