import React, { FC } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router";
import { FbService } from "../services/fb-service";
import Seo from "../components/seo/seo-component";

const Article: FC = (props: any) => {
  if (!props.location!.state) {
    return <Redirect to="/events" />;
  }

  const { cardDetail, pageURL } = props.location!.state;

  const shareContent = () => {
    FbService.sharePost(cardDetail, pageURL);
  };
  return (
    <React.Fragment>
      <Seo fbMetaTags={cardDetail} />
      <Container>
        <Card>
          <Card.Img variant="top" src={cardDetail.url} />
          <Card.Body>
            <Card.Title>{cardDetail.title}</Card.Title>
            <Card.Text>{cardDetail.description}</Card.Text>
            <Button
              variant="primary"
              className="float-right"
              onClick={shareContent}
            >
              Share Event on Facebook
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};
export default Article;
