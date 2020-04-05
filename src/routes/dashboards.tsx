import React, { FC, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactChart } from '../components/Charts/bar-chart';
import { ReactPieChart } from '../components/Charts/pie-chart';
import { ApiContext } from '../core/api-context';

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
        let tempArray = [];
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
            <Container className="dashboards">
                <ReactChart title='Indoor Cricket League' data={chartData} />
                <ReactPieChart title='Indoor Cricket League' data={chartData} />
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