import * as React from 'react'
import { Card, ListGroup, ListGroupItem, Container, Row } from 'react-bootstrap';
import { AppProps, CardDetail } from '../../core/props';

const cardStyle = {
  marginBottom: 10
}

const AppCard: React.FC<AppProps> = (props) =>{
  

  const generateLinks = (links: any) => {
    let url = '';
    let target = '';
    if (links && links.length > 0) {
      const linkGroups = links.map((link: any, index: number) => {
        url = link.url ? link.url : link.id;
        target = link.url ? '_blank' : '_self';
        return <ListGroupItem key={index}>
          <a href={url} target={target}> {link.title} </a>
        </ListGroupItem>
      })
    return linkGroups ? <ListGroup className="list-group-flush"> {linkGroups} </ListGroup> : '';
    }
  };
  
  const generateImage = (cardDetail: CardDetail) => {
    return cardDetail.url ? <Card.Img variant="top" src={cardDetail.url} /> : '';
  };

  const generateBody = (cardDetail: CardDetail) => {
    const title = cardDetail.title ? <Card.Title>{cardDetail.title}</Card.Title> : '';
    const date = cardDetail.date ? <Card.Text>{cardDetail.date}</Card.Text> : '';
    const description = cardDetail.description ? <Card.Text>{cardDetail.description}</Card.Text> : '';
    return (<Card.Body>
            {title}
            {date}
            {description}
          </Card.Body>)
  };

  const generateCards = (cardDetails: CardDetail[]) => {
    if (cardDetails && cardDetails.length > 0) {
      const cards = cardDetails.map((cardDetail: any, index) => {
        return <Card style={cardStyle} key={index} id={('card' + index)}>
          { generateImage(cardDetail)}
          { generateBody(cardDetail)}
          { generateLinks(cardDetail.links) }
      </Card>
      })
    return cards ? <Row className="list-group-flush"> {cards} </Row> : '';
    }
  }


      return (
        <Container>
          { 
            (props.cardDetails) ?
              generateCards(props.cardDetails) : ''
            }
        </Container>
      )
  }

  export default AppCard;
