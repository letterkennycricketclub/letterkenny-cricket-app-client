import * as React from 'react';
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";

export class ReactPieChart extends React.Component<any> {

    private config = {
        chart: {
            type: 'pie'
        },
        title: {
            text: this.props.title,
        },
        subtitle: {
            text: 'Source: Letterkenny Cricket Club'
        },
        series: [
            {
                name: 'Total Score',
                colorByPoint: true,
                data: this.props.data,
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 300
                },
                chartOptions: {
                    chart: {
                        height: 300,
                        width: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
    };

    render(): any {

        return (
            <div className="pie-chart">
                <Chart highcharts={Highcharts} options={this.config} />
            </div>
        )
    }

}