import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { AppProps, PointTable } from '../../core/props';
import { ListGroupItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const tableSytle = {
    marginLeft: '0px'
};

export default class ClubPointTable extends Component<AppProps> {

    generateTable(data: any) {
        let tBody = [];
        let tDs = [];
        let headers = [];
        let indx;
        let obj;
        let col;
        for (let i = 0; i < data.length; i++) {
            tDs = [];
            indx = -1;
            obj = data[i];
            for (let j in obj) {
                indx++;
                if (i === 0) {
                    headers.push(<th key={indx}>{j}</th>);
                }
                if (j === 'Logo') {
                    col = <td key={indx}><img alt="team logo" src={obj[j]}></img></td>

                } else {
                    col = <td key={indx}>{typeof (obj[j]) === 'string' ? obj[j] : obj[j] + ''}</td>
                }
                tDs.push(col);
            }
            tBody.push(<tr key={i}>{tDs}</tr>)
        }
        return { headers, tBody };
    }

    render() {
        if (this.props.pointTables) {
            return (

                <Card className="mb-10">
                    <Card.Header>Point Table</Card.Header>
                    {this.generatePointTables(this.props.pointTables as PointTable[])}

                </Card>
            );
        }
    }

    generateLinks(allowedHeaders: any, id: string): React.ReactNode {
        return allowedHeaders && allowedHeaders.length > 0 ?(<ListGroupItem key={id}>
        <Link smooth to={'/detailed-point-table/#' + id}> Click to view Detailed Point Table </Link>
      </ListGroupItem>) : ''
    }
    generatePointTables(pointTables: PointTable[]): React.ReactNode {
        const allowedHeaders: any = this.props.allowedPointHeaders || this.getDefaultPointHeaders();
        return pointTables.map((pointTable: PointTable) => {
            const { id, name, data } = pointTable;
            let filteredData = this.getFilteredData(allowedHeaders, data);
            const { headers, tBody } = this.generateTable(filteredData);
            return filteredData && filteredData.length > 0 ? (<Card.Body id={id} key={id}>
                <Card.Title>{name}</Card.Title>
                <Table striped bordered hover size="sm" style={tableSytle} responsive>
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {tBody}
                    </tbody>
                </Table>
                        {this.generateLinks(allowedHeaders, id)}
            </Card.Body>) : '';
        })

    }

    getFilteredData(allowedHeaders: string[], data: any[]) {
        let newObj: any;
        let filteredData;
        if (allowedHeaders && allowedHeaders.length > 0) {
            filteredData = data.map((obj) => {
                newObj = {};
                allowedHeaders.map((allowHeader) => {
                    if (obj.hasOwnProperty(allowHeader)) {
                        newObj[allowHeader] = obj[allowHeader];
                    }
                });
                return newObj;
            });
            return filteredData;
        } else {
            return data;
        }
    }

    getDefaultPointHeaders() {
        return [`Rank`, `Logo`, `Team_Name`, `M`, `W`, `L`, `TotalRuns_Scored`, `TotalRuns_Conceded`, `TotalRuns_Overs`, `Round1_Pt`, `Pts`, `RR`, `Penalty_RR`];
    }
}
