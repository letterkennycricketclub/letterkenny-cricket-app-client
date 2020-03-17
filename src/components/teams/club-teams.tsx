import React from "react";
import { Card, Image, ListGroup, CardColumns } from "react-bootstrap";
import { Team, Player } from '../../core/props';
const captain = require('./icons/cap.jpg');
const manager = require('./icons/manager.png');

const icons = {
    captain,
    manager
}
const containerStyle = {
    justifyContent: "space between",
    display: "flex",
    alignItems: "center"
}

type teamsProp = {
    teams: Team[];
}

const ClubTeams: React.FC<teamsProp> = (props: teamsProp) => {
    console.log(props.teams);

    const generateHeader = (team: Team) => {
        return (
            <Card.Header>
                <div style={containerStyle}><Image src={team.url} rounded />
                    <h3 className="ml-5">{team.name}</h3></div>
            </Card.Header>
        );
    }

    const generatePlayerList = (players: Player[] = []) => {
        const playerList = players.map((player: Player, index) => {
            return (
                <ListGroup.Item key={index}>
                    <div style={containerStyle}>
                        <p>{player.name}</p>
                        {
                            (player.role === 'captain' || player.role === 'manager') ? <Image className="ml-5" src={icons[player.role]} rounded />
                                : ''
                        }
                    </div>
                </ListGroup.Item>

            )
        })
        return (
            <ListGroup>
                {playerList}
            </ListGroup>
        )
    }

    const generateTeamCards = () => {
        return (props.teams!.map((team: Team, index: number) => {
            return (team) ?
                (
                    <Card className="mt-5" key={team.id}>
                        {generateHeader(team)}
                        <Card.Body>
                            {generatePlayerList(team.players)}
                        </Card.Body>
                    </Card>
                ) : '';
        })
        );
    }

    return (
        <CardColumns>
            {
                generateTeamCards()
            }
        </CardColumns>
    );
}

export default ClubTeams;
