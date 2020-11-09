import React from "react";

import { Grid } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ country, data: { confirmed, recovered, deaths } }) => {
  const bar = deaths ? (
    <Grid container mx="auto">
      <Bar
        mx="auto"
        data={{
          labels: ["Confirmed", "Recovered", "Deaths"],
          datasets: [
            {
              label: "Number",
              backgroundColor: [
                "rgba(0, 0, 255, 0.8)",
                "rgba(0, 255, 0, 0.8)",
                "rgba(255, 0, 0, 0.8)",
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    </Grid>
  ) : null;

  return <div className={styles.container}>{country && bar}</div>;
};

export default Chart;
