import React, { FC, useState } from "react";
import { Redirect } from "react-router";
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import { UserService, User } from '../../../services/user-service';
import { Link } from '../../../core/api-data-obj';

const AddClubEvent: FC<any> = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [imageFile, setImageFile] = useState<File>();
    const [links, setLinks] = useState<Link[]>([]);

    const validateForm = () => {
        return true;//email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(title, description, date, imageFile)
        // const user:User = {
        //     email,
        //     password,
        //     role
        // };
        // setRedirectToReferrer(await UserService.login(user));
    }

    const onImageFileSelected = (event: any) => {
        const selectedFile: File = event.target.files[0];
        setImageFile(selectedFile);
        console.log(selectedFile)
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e: any) => {
            console.log(e.target.result)
        };
    }

    const addLink = () => {
        return links.map((link: Link, i: any) =>
            <div key={i}>
                <Form.Group as={Row} controlId="linkTitle">
                    <Form.Label column sm={2}>Link</Form.Label>
                    <Col sm={4}><Form.Control type="text" placeholder="Enter Title" onChange={(e: any)=> textChanged(link, 'title', e.target.value)} /></Col>
                    <Col sm={4}><Form.Control type="text" placeholder="Enter URL" onChange={(e: any)=> textChanged(link, 'url', e.target.value)}/></Col>
                    <Col sm={2}>    <Button variant="success" type="button" onClick={ (e: any)=> onLinkRemoved(i)} >
                                    Remove
                        </Button></Col>
                </Form.Group>
            </div>
        );
    }

    const onAddLink = () => {
        const link: Link[] = [{ title: '', url: '' }];
        setLinks(links.concat(link));
    }

    const onLinkRemoved = (i:any) => {
        let nlinks = [...links];
        nlinks.splice(i, 1);
       setLinks(nlinks);
    }

    const textChanged = (link: any,  lProp:string, value: any) => {
        link[lProp] = value;
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col md="12">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="eventTitle">
                            <Form.Label column sm={2}>Event Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Title" autoFocus
                                    value={title}
                                    onChange={(e: any) => setTitle(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="eventDescription">
                            <Form.Label column sm={2}>Event Description</Form.Label>
                            <Col sm={10}>
                                <Form.Control column sm={10} as="textarea" rows="3" placeholder="Enter Description" value={description} onChange={(e: any) => setDescription(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="eventDate">
                            <Form.Label column sm={2}>Event Date</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" placeholder="Enter Date" value={date} onChange={(e: any) => setDate(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="eventImageFile">
                            <Form.Label column sm={2}>Select Image</Form.Label>
                            <Col sm={10}>
                                <Form.File custom>
                                    <Form.File.Input isValid onChange={onImageFileSelected} />
                                    <Form.File.Label data-browse="Upload Image...">
                                        {imageFile ? imageFile.name : ''}
                                    </Form.File.Label>
                                </Form.File>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="eventLinks">
                            <Form.Label column sm={2}>Event Links (Optional)</Form.Label>
                            <Col sm={10}>
                                <Button variant="success" type="button" onClick={onAddLink} >
                                    Add Links
                        </Button>
                            </Col>
                        </Form.Group>
                        {addLink()}
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button variant="primary" type="submit" disabled={!validateForm()}>
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddClubEvent;