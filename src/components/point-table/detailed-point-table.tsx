import React, { FC, useContext } from "react";
import { AppProps } from "../../core/props";
import { Container, Row, Col } from 'react-bootstrap';
import ClubPointTable from './club-point-table';
import { ApiContext } from '../../core/api-context';

const DetailedPointTable: FC<AppProps> = (props: AppProps) => {
    const context: any = useContext(ApiContext);
    return (
        <Container>
            <Row className="mt-5">
                <Col md="12">
                    <Row>
                        <ClubPointTable pointTables={context.pointTables}/>
                    </Row>
                </Col>
                {/* <Col md="4">
                    <AppCard cardDetails={context.cardDetails} />
                </Col> */}
            </Row>
        </Container>
    );
}
export default DetailedPointTable;