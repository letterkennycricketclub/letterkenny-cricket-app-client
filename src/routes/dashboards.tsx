import React, { FC, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactChart } from '../components/Charts/bar-chart';
import { ApiContext } from '../core/api-context';
import { AppProps, PointTable } from '../core/props';

let chartData: any = [];

function getTournamentData(pointTableData: any, tournamentId: String) {
    let selectedData: any = [];
    pointTableData.forEach((tournament: any) => {
        if (tournament.id === tournamentId) {
            selectedData.push(tournament);
            return false;
        }
    });

    return selectedData[0].data;
}

function generateChartData(pointTableData: any, tournamentId: string, xAxisField: string, yAxisField: string) {
    let barChartData: any = [];
    let selectedTournamentData = getTournamentData(pointTableData, tournamentId);
    for (let i = 0; i < selectedTournamentData.length; i++) {
        let tempArray= [];
        tempArray.push(selectedTournamentData[i][xAxisField]);
        tempArray.push(selectedTournamentData[i][yAxisField]);
        barChartData.push(tempArray);
    }
    return barChartData;
}

const Dashboard: FC = () => {
    const context: any = useContext(ApiContext);
    let pointTableData = context.pointTables;
    if (pointTableData.length > 0) {
        chartData = generateChartData(pointTableData, 'indoor-cricket', 'Teams', 'TotalRuns Scored');
        console.log('chart data is', chartData);

        return (
            <Container>
                <Row className="mt-5">
                    <Col md="12">
                        <Row>
                            {/* <ReactChart width={800} height={500} data={chartData} /> */}
                            <ReactChart title='Indoor Cricket League' data={chartData} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <div>No data available currently</div>
             </Container>
        );
    }
}
export default Dashboard;