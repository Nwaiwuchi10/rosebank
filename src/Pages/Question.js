import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Question.css";
import Slide from "react-reveal/Slide";

const Question = () => {
  return (
    <div className="div-oga">
      <div className="div-tit1">
        <Row>
          <Col className="col-tit1">Do you still have questions?</Col>
        </Row>
        <Row>
          <Col className="col-tit2">
            {" "}
            Check out our <strong>FAQ</strong> page to answer any of your
            questions around our products and services, and if you require
            further assistance or would like to reach us for general inquiries,
          </Col>
        </Row>
        <Row>
          <Col className="col-tit2">
            please call us on <strong>+2348136757488</strong> or email{" "}
            <strong>customerservice@rosebank.com</strong>
          </Col>
        </Row>
      </div>
      <div className="div-tit2">
        <Slide right>
          <Image
            className="img-pix"
            src="https://instoremag.com/wp-content/uploads/2021/12/smiling-lady-waving-her-hand.jpg"
            alt="hf"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Question;
