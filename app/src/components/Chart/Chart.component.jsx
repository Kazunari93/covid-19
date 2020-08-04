import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "感染者数 Infected",
            borderColor: "#df5e88",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "死亡者数 Deaths",
            borderColor: "#f6efa6",
            backgroundColor: "#f6efa6",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["感染者数 Infected", "回復者数 Recovered", "死亡者数 Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [" #df5e88", "#8fcfd1", "#f6efa6"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current : ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
