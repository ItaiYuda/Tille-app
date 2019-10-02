import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './financeStyle.css';

class FinanceTile extends Component{
  constructor(props){
    super(props);
    this.state = {
      labels: this.props.finance.categories,
      datasets: [
      {
        label: 'Apple',
        fill: true,
        lineTension: 0.2,
        backgroundColor: 'rgba(255, 51, 51,0.4)',
        borderColor: 'rgba(255, 51, 51,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 51, 51,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 51, 51,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: this.props.finance.values
      }],
      options: {
        title: {
          display: true,
          text: `${this.props.finance.name} Inc.`,
          lineHeight: 0,
          fontSize: 20,
        },
        layout: {
          padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 0
          }
      },
        scales: {
          xAxes: [{
            display: true

          }],
          yAxes: [{
            type: "linear",
            display: true,
            position: "left"
        
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }

    }
  }

  static getDerivedStateFromProps = (props, state) => {
    if(props.finance.categories !== state.labels){
      return {
        labels: props.finance.categories,
        datasets: [
          {
            ...state.datasets[0],
            data: props.finance.values
          }
        ]
      }
    }
    return null;
  }
  
  render() {
    return (
      <div className='chart-tile tile'>
        <h2>Finance</h2>
        <div className="chart-container">
          <Line 
            data={this.state}
            options={this.state.options}
            />
        </div>
      </div>
    );
  }
}
export default FinanceTile;
