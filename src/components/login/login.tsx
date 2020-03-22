import React, { FC, useState } from "react";
import { fakeAuth } from '../../routes/admin/admin-route';
import { Redirect } from "react-router";
import { FormGroup, FormControl, Button, Form, Container, Col, Row } from 'react-bootstrap';
import { UserService, User } from '../../services/user-service';

const Login: FC<any> = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToReferrer, setRedirectToReferrer] = useState<boolean>();
    const [role, setRole] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }
 
    const handleSubmit = async(event: any) => {
        event.preventDefault();
        const user:User = {
            email,
            password,
            role
        };
        setRedirectToReferrer(await UserService.login(user));
    }

    const { from } = props.location.state || { from: { pathname: '/' } }
    console.log('login >>', from, ';;;', props.location.state)
    if (redirectToReferrer) {
        return <Redirect to={from} />
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col md="4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="loginFormEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoFocus
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="loginFormPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="loginFormSelect" onChange={(e: any) => setRole(e.target.value)}>
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" >
                                <option value="admin">Admin</option>
                                <option value="scorer">Scorer</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;