import React from "react";
import { Col, Row } from "reactstrap";

const Dividers = () => {
  return (
    <div className="dividerContainer">
      <Row>
        <Col md={3} sm={12} xs={12} align="center">
          <div className="divdiv" />
        </Col>
        <Col md={3} sm={12} xs={12} align="center">
          <div className="divdiv" />
        </Col>
        <Col md={3} sm={12} xs={12} align="center">
          <div className="divdiv" />
        </Col>
        <Col md={3} sm={12} xs={12} align="center">
          <div className="divdiv" />
        </Col>
      </Row>
    </div>
  );
};
export default Dividers;
