import React, { FC, useState, useContext } from "react";
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import { AppProps, PointTable } from '../../core/props';
import ClubPointTable from '../../components/point-table/club-point-table';
import { ApiContext } from '../../core/api-context';
import { PointTableService } from '../../services/point-table-service';
const scrollToComponent = require('react-scroll-to-component');

const AdminPointTable: FC<AppProps> = (props: AppProps) => {
    const context: any = useContext(ApiContext);

    const [pointTablesForUpdate, setPointTables] = useState(JSON.stringify(context.pointTables, undefined, 2));
    const [updatedPointTables, setUpdatedPointTables] = useState(context.pointTables);
    const [apiResult, setApiResult] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    const validateForm = () => {
        return true;
    }

    const resetForm = () => {
        setPointTables(JSON.stringify(context.pointTables, undefined, 2));
        setShowPreview(false);
    }
    let pointTableCompRef: any;

    const updatePreview = async (event: any) => {
        event.preventDefault();
        console.log('pointable >>>>>', pointTablesForUpdate);
        setShowPreview(true);
        setUpdatedPointTables(JSON.parse(pointTablesForUpdate));
        scrollToComponent(pointTableCompRef, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });

    }

    const onUpdatePointTable = async (event: any) => {
        const { message, success } = await PointTableService.updatePointTable(updatedPointTables);
        setApiResult(message);
        if (success) {
            context.setPointTables(updatedPointTables);
        }

    }

    return (
        <Container>
            <h2>Update Point Table</h2>
            <Row className="mt-5">
                <Col md="12">
                    <Form>

                        <Form.Group as={Row} controlId="pointTableText">
                            <Form.Label column sm={2}>Point Table</Form.Label>
                            <Col sm={10}>
                                <Form.Control sm={10} as="textarea" rows="20" value={pointTablesForUpdate} onChange={(e: any) => setPointTables(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button variant="primary" onClick={updatePreview} disabled={!validateForm()}>
                                    Preview
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button variant="warning" onClick={resetForm}>
                                    Reset
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-5">
                {showPreview ? <ClubPointTable pointTables={updatedPointTables} /> : ''}
            </Row>
            <Row>
                <Col md="12">
                    <Row>
                        <section ref={(row) => { pointTableCompRef = row; }}></section>
                        <p className="primary">{apiResult}</p> 
                    </Row>
                    <Row>
                        <Button variant="primary" disabled={!validateForm()} onClick={onUpdatePointTable}>
                            Update Point Table
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default AdminPointTable;