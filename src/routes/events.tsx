import React, { FC, useContext } from "react";
import { AppProps } from "../core/props";
import { Container, Row, Col } from "react-bootstrap";
import { AppCard } from "../components";
import { ApiContext } from "../core/api-context";

const Events: FC<AppProps> = (props: AppProps) => {
  const context: any = useContext(ApiContext);
  console.log(context.eventDetails, "context.eventDetails");
  const slicedCardDetails = context.cardDetails.slice(
    1,
    context.cardDetails.lenght
  );
  return (
    <Container>
      <Row className="mt-5">
        <Col md="8">
          <Row>
            <AppCard hasShareLink={true} cardDetails={context.eventDetails} />
          </Row>
        </Col>
        <Col md="4">
          <AppCard cardDetails={slicedCardDetails} />
        </Col>
      </Row>
    </Container>
  );
};
export default Events;
