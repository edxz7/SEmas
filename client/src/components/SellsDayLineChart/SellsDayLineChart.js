import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {
  render() {
    return (
      <>
        {/* <h2 style={{color:"white"}}>Ventas</h2> */}
        <Line ref="chart" data={this.props.data} />
      </>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data
  //   console.log(datasets[0].data);
  // }
}