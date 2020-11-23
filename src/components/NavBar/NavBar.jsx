import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Button,
} from "@material-ui/core/";
import styles from "./NavBar.module.css";

function HideOnScroll(props) {
  const trigger = useScrollTrigger({
    target: props.window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default function NavBar(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar className={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" className={styles.title} align="center">
            COVID-19 TRACKER
          </Typography>
          <Button
            color="inherit"
            target="_blank"
            href="https://covid19.mathdro.id/api"
            rel="noreferrer"
          >
            API 1
          </Button>
          <Button
            color="inherit"
            target="_blank"
            href="https://disease.sh/v3/covid-19/countries?sort=cases"
            rel="noreferrer"
          >
            API 2
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
