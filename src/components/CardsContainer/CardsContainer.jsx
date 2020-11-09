import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";
import CardItem from "../CardItem/CardItem";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!deaths) return <CircularProgress />;

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
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
    </div>
  );
};

export default CardsContainer;
