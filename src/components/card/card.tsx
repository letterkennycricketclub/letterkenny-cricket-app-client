import React, { useState } from "react";
import Seo from "../seo/seo-component";

import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
} from "react-bootstrap";
import { AppProps, CardDetail } from "../../core/props";
import { FbService } from "../../services/fb-service";
import AppConstants from "../../core/constants";

declare const window: Window;

const cardStyle = {
  marginBottom: 10,
};

const AppCard: React.FC<AppProps> = (props) => {
  const [metaData, setMetaData] = useState({});
  const generateLinks = (links: any) => {
    let url = "";
    let target = "";
    if (links && links.length > 0) {
      const linkGroups = links.map((link: any, index: number) => {
        url = link.url ? link.url : link.id;
        target = link.url ? "_blank" : "_self";
        return (
          <ListGroupItem key={index}>
            <a href={url} target={target}>
              {" "}
              {link.title}{" "}
            </a>
          </ListGroupItem>
        );
      });
      return linkGroups ? (
        <ListGroup className="list-group-flush"> {linkGroups} </ListGroup>
      ) : (
        ""
      );
    }
  };

  const generateImage = (cardDetail: CardDetail) => {
    return cardDetail.url ? (
      <Card.Img variant="top" src={cardDetail.url} />
    ) : (
      ""
    );
  };

  const generateBody = (cardDetail: CardDetail) => {
    const title = cardDetail.title ? (
      <Card.Title>{cardDetail.title}</Card.Title>
    ) : (
      ""
    );
    const date = cardDetail.date ? (
      <Card.Text>{cardDetail.date}</Card.Text>
    ) : (
      ""
    );
    const description = cardDetail.description ? (
      <Card.Text>{cardDetail.description}</Card.Text>
    ) : (
      ""
    );
    return (
      <Card.Body>
        {title}
        {date}
        {description}
      </Card.Body>
    );
  };

  const shareContent = (cardDetail: CardDetail, id: string) => {
    const currentPath = window.location.href.split("#")[0];
    setMetaData({ ...cardDetail, link: currentPath + "#" + id });
    FbService.sharePost(metaData);
  };

  const generateAdminLinks = (cardDetail: CardDetail, index: number) => {
    const id = "card" + index;
    return (
      <div className="mb-2 float-right">
        <Button
          variant="primary"
          className="float-right"
          onClick={() => shareContent(cardDetail, id)}
        >
          Share Event on Facebook
        </Button>
      </div>
    );
  };

  const generateCards = (cardDetails: CardDetail[]) => {
    if (cardDetails && cardDetails.length > 0) {
      const cards = cardDetails.map((cardDetail: any, index) => {
        return (
          <Card style={cardStyle} key={index} id={"card" + index}>
            {generateImage(cardDetail)}
            {generateBody(cardDetail)}
            {generateLinks(cardDetail.links)}
            {generateAdminLinks(cardDetail, index)}
            {/* {sessionStorage.getItem(AppConstants.USER_ROLE) ===
            AppConstants.ADMIN
              ? generateAdminLinks(cardDetail, index)
              : null} */}
          </Card>
        );
      });
      return cards ? <Row className="list-group-flush"> {cards} </Row> : "";
    }
  };

  return (
    <div>
      <Seo data={metaData} />
      <Container>
        {props.cardDetails ? generateCards(props.cardDetails) : ""}
      </Container>
    </div>
  );
};

export default AppCard;
