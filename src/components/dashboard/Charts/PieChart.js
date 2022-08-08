import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./ChartStyles.module.css";

const PieChart = ({ chartData }) => {
  return (
    <div className={styles.chartcontainer}>
      <h2>Storage Information</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
