// eslint-disable-next-line
// https://www.react-google-charts.com/
import React from "react";
import { Chart } from "react-google-charts";

export default function SimpleChart(props) {
  return (
    <Chart
      chartType="ScatterChart"
      data={props.data}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}
