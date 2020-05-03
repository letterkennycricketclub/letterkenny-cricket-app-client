import React, { FC, useState, useContext } from "react";
import { Redirect } from "react-router";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { UserService, User } from "../../services/user-service";
import { ApiContext } from "../../core/api-context";

const Login: FC<any> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState<boolean>();
  const [role, setRole] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const context: any = useContext(ApiContext);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const user: User = {
      email,
      password,
      role,
    };
    UserService.login(user)
      .then((data) => {
        setRedirectToReferrer(true);
      })
      .catch((err) => {
        console.log("Error Occured>>>", err);
        setErrorMsg(err.message);
      });
  };

  const { from } = props.location.state || {
    from: { pathname: "/admin/home" },
  };

  if (redirectToReferrer) {
    return <Redirect to="/admin/home" />;
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col md="4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginFormEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoFocus
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="loginFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              controlId="loginFormSelect"
              onChange={(e: any) => setRole(e.target.value)}
            >
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option value="admin">Admin</option>
                <option value="scorer">Scorer</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!validateForm()}>
              Submit
            </Button>
          </Form>
          <span style={{ color: "red" }}>{errorMsg}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
