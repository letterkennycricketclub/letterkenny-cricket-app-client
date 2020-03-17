import React, { FC, useContext } from "react";
import { AppProps } from "../core/props";
import { Container, Row, Col } from 'react-bootstrap';
import { ClubCarousel, ClubPointTable, AppCard } from '../components';
import { ApiContext } from '../core/api-context';

const Home: FC<AppProps> = (props: AppProps) => {
    const context: any = useContext(ApiContext);
    return (
        <Container>
            <Row className="mt-5">
                <Col md="8">
                    <Row>
                        <ClubCarousel medias={context.medias} />
                        <ClubPointTable pointTables={context.pointTables} />
                    </Row>
                </Col>
                <Col md="4">
                    <AppCard cardDetails={context.cardDetails} />
                </Col>
            </Row>
        </Container>
    );
}
export default Home;