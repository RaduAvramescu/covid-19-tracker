import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Button,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title} align="center">
              COVID-19 TRACKER
            </Typography>
            <Button
              color="inherit"
              target="_blank"
              href="https://covid19.mathdro.id/api"
            >
              API 1
            </Button>
            <Button
              color="inherit"
              target="_blank"
              href="https://disease.sh/v3/covid-19/countries?sort=cases"
            >
              API 2
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
