import React from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
} from "reactstrap";
import { MdArrowForward } from "react-icons/md";

const Tabs = () => {
  return (
    <div className="tabsContainer">
      <Row>
        <Col md={4} sm={6} xs={12}>
          <Card className="border-0 p-5">
            <CardHeader className="border-0">
              <h1>01</h1>
            </CardHeader>
            <CardBody>
              <CardTitle className="title">
                <b>You describe</b> the project. Together we set the PRD,
                timeline & pricing.
              </CardTitle>
              <CardText className="body">
                Tell us the idea of the project you have in mind. We will
                discuss it together to come up with the requirements, timeline
                and pricing.
              </CardText>
            </CardBody>
            <CardFooter className="footer border-0">
              Get Started Now <MdArrowForward />{" "}
            </CardFooter>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="border-0 p-5">
            <CardHeader className="border-0">
              <h1>02</h1>
            </CardHeader>
            <CardBody>
              <CardTitle className="title">
                <b> We prototype</b> the design. You help us improve it with
                feeback rounds.
              </CardTitle>
              <CardText className="body">
                We will prepare an initial design based on the project
                description. With your help we will improve the design with a
                few feeback rounds.
              </CardText>
            </CardBody>
            <CardFooter className="footer border-0">
              Find your Contact Person <MdArrowForward />{" "}
            </CardFooter>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="border-0 p-5">
            <CardHeader className="border-0">
              <h1>03</h1>
            </CardHeader>
            <CardBody>
              <CardTitle className="title">
                <b>We develop</b> the final design with excellent quality. We
                deliver on time.
              </CardTitle>
              <CardText className="body">
                Once we have the final design, we get to implmentation and
                deliver your project as promised. Then you’ll tweet great things
                about us.
              </CardText>
            </CardBody>
            <CardFooter className="footer border-0">
              Tell your friends <MdArrowForward />{" "}
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Tabs;
