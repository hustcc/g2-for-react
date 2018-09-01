import React, { Component } from 'react';
import GFR from '../..';
import { data } from './data';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const [removed, ...data] = this.state.data;

      this.setState({
        data: [...data, removed],
      })
    }, 1000);
  }

  onReady(chart) {
    console.log('Ready', chart);
  };

  creator(chart) {
    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    chart.axis('temperature', {
      label: {
        formatter: function formatter(val) {
          return val + '°C';
        }
      }
    });
    chart.line().position('month*temperature').color('city');
    chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <GFR
        data={this.state.data}
        creator={this.creator}
        onReady={this.onReady}
      />
    );
  }
}
