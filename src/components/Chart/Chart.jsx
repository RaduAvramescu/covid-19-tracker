import React from "react";

import { Box, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const Chart = ({ country, data: { confirmed, recovered, deaths } }) => {
  const bar = deaths ? (
    <Box mt="2rem">
      <Typography variant="h4" align="center" gutterBottom>
        CHART
      </Typography>
      <Bar
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
    </Box>
  ) : null;

  return (
    <Box mx="auto" width="60%">
      {country && bar}
    </Box>
  );
};

export default Chart;
