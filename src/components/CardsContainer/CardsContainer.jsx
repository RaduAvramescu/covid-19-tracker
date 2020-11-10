import React from "react";

import { Box, Typography, Grid, CircularProgress } from "@material-ui/core";
import CardItem from "../CardItem/CardItem";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!deaths)
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );

  return (
    <React.Fragment>
      <Box mt="120px">
        <Typography variant="h4" align="center">
          COUNTRY INFORMATION
        </Typography>
      </Box>
      <Box className={styles.container} mt="2rem" mb="2rem">
        <Grid container spacing={2} justify="center" m="5rem">
          <CardItem
            className="confirmed"
            cardName="Confirmed"
            cardNameColor="blue"
            value={confirmed.value}
            lastUpdate={lastUpdate}
          />
          <CardItem
            className="recovered"
            cardName="Recovered"
            cardNameColor="green"
            value={recovered.value}
            total={confirmed.value}
            lastUpdate={lastUpdate}
          />
          <CardItem
            className="deaths"
            cardName="Deaths"
            cardNameColor="red"
            value={deaths.value}
            total={confirmed.value}
            lastUpdate={lastUpdate}
          />
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CardsContainer;
