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
import { Link } from "react-router-dom";
import AppConstants from "../../core/constants";

const Admin: FC<AppProps> = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md="12">
          <Row>
            <Card>
              <Card.Title>
                {sessionStorage.getItem(AppConstants.USER_EMAIL)} Admin
                Components
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem>
                    <Link to="/admin/point-table">Point Table</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/add-club-event">Add Club Event</Link>
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
