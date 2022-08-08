import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./ChartStyles.module.css";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        xaxis: {
          categories: JSON.parse(localStorage.getItem("dashboardPage"))
            .latestHits.months,
        },
        stroke: {
          curve: "smooth",
          width: "3",
        },
        colors: ["#f7604c", "#a8d582", "#4ed6b8"],
      },
      series: [
        {
          name: "featured",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .featured,
        },
        {
          name: "latest",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .latest,
        },
        {
          name: "popular",
          data: JSON.parse(localStorage.getItem("dashboardPage")).latestHits
            .popular,
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.chartcontainer}>
        <h2>Latest Hits</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}
export default LineChart;
