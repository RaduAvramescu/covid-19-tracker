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
      <Box mt="8rem">
        <Typography variant="h4" align="center">
          COUNTRY INFORMATION
        </Typography>
      </Box>
      <Box className={styles.container} py="2rem">
        <Grid
          className={styles.fullWidth}
          container
          spacing={4}
          justify="center"
        >
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
