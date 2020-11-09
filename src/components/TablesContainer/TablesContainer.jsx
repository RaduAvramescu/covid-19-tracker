import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import CountUp from "react-countup";
import { getTableData } from "../../api";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TablesContainer() {
  const classes = useStyles();

  const [getedTableData, setGetedTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setGetedTableData(await getTableData());
    };

    getData();
  }, [setGetedTableData]);

  function createData(name, confirmed, recovered, deaths) {
    return { name, confirmed, recovered, deaths };
  }

  let rows = [createData("Loading")];

  if (!getedTableData.data)
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  else {
    rows = [
      createData(
        getedTableData.data[0].country,
        getedTableData.data[0].cases,
        getedTableData.data[0].recovered,
        getedTableData.data[0].deaths
      ),
      createData(
        getedTableData.data[1].country,
        getedTableData.data[1].cases,
        getedTableData.data[1].recovered,
        getedTableData.data[1].deaths
      ),
      createData(
        getedTableData.data[2].country,
        getedTableData.data[2].cases,
        getedTableData.data[2].recovered,
        getedTableData.data[2].deaths
      ),
      createData(
        getedTableData.data[3].country,
        getedTableData.data[3].cases,
        getedTableData.data[3].recovered,
        getedTableData.data[3].deaths
      ),
      createData(
        getedTableData.data[4].country,
        getedTableData.data[4].cases,
        getedTableData.data[4].recovered,
        getedTableData.data[4].deaths
      ),
    ];
  }

  return (
    <React.Fragment>
      <Typography variant="h4" align="center" gutterBottom>
        TOP 5 COUNTRIES
      </Typography>
      <TableContainer>
        <Table
          style={{ width: "25%" }}
          className={classes.table}
          aria-label="customized table"
          align="center"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Confirmed</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
              <StyledTableCell align="center">Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CountUp
                    duration={2}
                    start={0}
                    end={row.confirmed}
                    separator=","
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CountUp
                    duration={2}
                    start={0}
                    end={row.recovered}
                    separator=","
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CountUp
                    duration={2}
                    start={0}
                    end={row.deaths}
                    separator=","
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
