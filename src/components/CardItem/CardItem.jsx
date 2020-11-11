import React from "react";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./CardItem.module.css";

const CardItem = ({
  className,
  cardName,
  cardNameColor,
  value,
  total,
  lastUpdate,
}) => (
  <Grid
    className={`${styles.card} ${styles[className]}`}
    item
    component={Card}
    md={3}
    xs={12}
    align="center"
  >
    <Box py="1rem">
      <CardHeader
        className={styles[cardNameColor]}
        title={cardName}
      ></CardHeader>
      <CardContent>
        <Typography variant="h5" component="p" color="textPrimary" gutterBottom>
          <CountUp duration={2} start={0} end={value} separator="," />
          {total && (
            <React.Fragment>
              {" "}
              (
              <CountUp
                duration={2}
                start={0}
                end={(value / total) * 100}
                decimals={2}
              ></CountUp>
              %)
            </React.Fragment>
          )}
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary">
          Date: {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Box>
  </Grid>
);

export default CardItem;
