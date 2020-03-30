import * as React from 'react';
import { BarInterface } from '../../core/props';

const ReactHighcharts = require('react-highcharts');

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
            text: 'Total Score'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total runs scored: <b>{point.y:.1f} </b>'
    },
    series: [{
        name: 'Population',
        data: this.props.data,
       
    }]
  };
  
      render(): any {

        return (
      <div className="anshul nema">
        <ReactHighcharts config = {this.config}/>
    </div>
        )
    }
    
  }