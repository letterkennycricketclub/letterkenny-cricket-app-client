import * as React from 'react';
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";

export class ReactChart extends React.Component<any> {

    private config = {
        chart: {
            type: 'column'
        },
        title: {
            text: this.props.title,
        },
        subtitle: {
            text: 'Source: Letterkenny Cricket Club'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Score of team'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total runs scored: <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Total score of team',
            data: this.props.data,

        }],
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
            <div className="bar-chart">
                <Chart highcharts={Highcharts} options={this.config} />
            </div>
        )
    }

}