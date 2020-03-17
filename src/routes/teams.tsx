import React, { FC, useContext } from "react";
import { AppProps, Tournament } from "../core/props";
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { ClubTeams } from "../components";
import { ApiContext } from '../core/api-context';

const Teams: FC<AppProps> = (props: AppProps) => {
    const context: any = useContext(ApiContext);
    const generateTab = () => {
        if (context.tournaments && context.tournaments.length > 0) {
            return (context.tournaments.map((tournament: Tournament) => {
                return (tournament) ?
                    (
                        <Tab key={tournament.id} eventKey={tournament.id} title={tournament.name}
                            disabled={tournament.teams!.length <= 0}>
                            {
                                (tournament.teams && tournament.teams.length > 0)
                                    ? <ClubTeams teams={tournament.teams} />
                                    : ''
                            }
                        </Tab>
                    ) : '';
            }
            ))
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col md="12">
                    <Row>
                        {(context.tournaments && context.tournaments.length > 0) ?
                            <Tabs defaultActiveKey={context.tournaments[0].id} id="teams-tab">
                                {generateTab()}
                            </Tabs> : ''}
                    </Row>
                </Col>
                {/* <Col md="4">
            </Col> */}
            </Row>
        </Container>
    );
}
export default Teams;