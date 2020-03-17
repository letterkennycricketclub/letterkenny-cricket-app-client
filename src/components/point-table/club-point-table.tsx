import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { AppProps, PointTable } from '../../core/props';

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
        for (let i = 0; i < data.length; i++) {
            tDs = [];
            indx = -1;
            obj = data[i];
            for (let j in obj) {
                indx++;
                if (i === 0) {
                    headers.push(<th key={indx}>{j}</th>);
                }
                tDs.push(<td key={indx}>{typeof (obj[j]) === 'string' ? obj[j] : obj[j] + ''}</td>);
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
    generatePointTables(pointTables: PointTable[]): React.ReactNode {
        return pointTables.map((pointTable: PointTable) => {
            const { title, data } = pointTable;
            const { headers, tBody } = this.generateTable(data);
            return (<Card.Body key={title}>
                <Card.Title>{title}</Card.Title>
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
            </Card.Body>);
        })

    }
}
