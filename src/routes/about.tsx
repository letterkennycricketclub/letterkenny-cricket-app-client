import React, { FC } from 'react'
import { Container, Row, Col } from "react-bootstrap";


const About: FC = () => {
    return (
          <Container>
          <Row className="mt-5">
            <Col>
              <Row>
              <img className="responsive-img" src="https://club-site-media.s3-eu-west-1.amazonaws.com/events/coming-soon.jpg" alt="Coming Soon"></img>
              </Row>
            </Col>
          </Row>
        </Container>    
    )
}
export default About;

