import React, { FC, useContext, useState } from "react";
import { AppProps } from "../../core/props";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import ClubPointTable from "../../components/point-table/club-point-table";
import { ApiContext } from "../../core/api-context";
import { Link } from "react-router-dom";

const Admin: FC<AppProps> = () => {
  const context: any = useContext(ApiContext);
  return (
    <Container>
      <Row className="mt-5">
        <Col md="12">
          <Row>
            <Card>
              <Card.Title>
                {context.userDetails.email} Admin Components
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem>
                    <Link to="/admin/point-table">Point Table</Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Admin;
