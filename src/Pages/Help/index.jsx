import React from "react";
import { MdArrowForward, MdWebAsset } from "react-icons/md";
import { Col, Row, Card, CardBody } from "reactstrap";

const HowCanWeHelp = () => {
  return (
    <div className="howContainer">
      <Col align="center" md={12} xs={12} sm={12}>
        <h1>How can we help you?</h1>
      </Col>
      <Col className="cardsContainer" md={12} xs={12} sm={12}>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Card className="card">
              <Col md={12} sm={12} xs={12}>
                <Row>
                  <Col md={2} sm={12} xs={12}>
                    <div className="icon">
                      <MdWebAsset />
                    </div>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      I want a landing page, website or a blog
                    </CardBody>
                  </Col>
                  <Col md={2} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      <MdArrowForward />
                    </CardBody>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="card">
              <Col md={12} sm={12} xs={12}>
                <Row>
                  <Col md={2} sm={12} xs={12}>
                    <div className="icon">
                      <MdWebAsset />
                    </div>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      I want a custom web app
                    </CardBody>
                  </Col>
                  <Col md={2} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      <MdArrowForward />
                    </CardBody>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="card">
              <Col md={12} sm={12} xs={12}>
                <Row>
                  <Col md={2} sm={12} xs={12}>
                    <div className="icon">
                      <MdWebAsset />
                    </div>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      I want a custom mobile app
                    </CardBody>
                  </Col>
                  <Col md={2} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      <MdArrowForward />
                    </CardBody>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="card">
              <Col md={12} sm={12} xs={12}>
                <Row>
                  <Col md={2} sm={12} xs={12}>
                    <div className="icon">
                      <MdWebAsset />
                    </div>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      I want something else. Let me explain…
                    </CardBody>
                  </Col>
                  <Col md={2} sm={12} xs={12}>
                    <CardBody className="cardBody">
                      <MdArrowForward />
                    </CardBody>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default HowCanWeHelp;
