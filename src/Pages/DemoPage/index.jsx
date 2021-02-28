import React from "react";
import { Col, Row } from "reactstrap/";

const DemoPage = () => (
  <div className="textContainer">
    <Row>
      <Col md={6} sm={6} xs={12}>
        <h1 className="pl-5">We empower makers using digital platforms</h1>
      </Col>
      <Col md={6} sm={6} xs={12}>
        <div className="description">
          <p>
            <b className="text-primary">Kelal Tech PLC</b> is an international,
            remote IT agency based in Ethiopia working on a wide range of
            software products—from websites and mobile apps to fully integrated
            custom systems and open source libraries.
          </p>
          <div>
            <p> We’ve got you covered!</p>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default DemoPage;
