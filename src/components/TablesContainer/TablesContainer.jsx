import React, { useState, useEffect } from "react";

import styles from "./TablesContainer.module.css";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
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
    color: "whitesmoke",
    fontSize: 20,
  },
  body: {
    color: "whitesmoke",
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,

    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(TableRow);

export default function TablesContainer() {
  const [getedTableData, setGetedTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setGetedTableData(await getTableData());
    };

    getData();
  }, [setGetedTableData]);

  function createData(flag, name, confirmed, recovered, deaths) {
    return { flag, name, confirmed, recovered, deaths };
  }

  let rows = [];

  if (!getedTableData.data)
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  else {
    rows = [
      createData(
        getedTableData.data[0].countryInfo.flag,
        getedTableData.data[0].country,
        getedTableData.data[0].cases,
        getedTableData.data[0].recovered,
        getedTableData.data[0].deaths
      ),
      createData(
        getedTableData.data[1].countryInfo.flag,
        getedTableData.data[1].country,
        getedTableData.data[1].cases,
        getedTableData.data[1].recovered,
        getedTableData.data[1].deaths
      ),
      createData(
        getedTableData.data[2].countryInfo.flag,
        getedTableData.data[2].country,
        getedTableData.data[2].cases,
        getedTableData.data[2].recovered,
        getedTableData.data[2].deaths
      ),
      createData(
        getedTableData.data[3].countryInfo.flag,
        getedTableData.data[3].country,
        getedTableData.data[3].cases,
        getedTableData.data[3].recovered,
        getedTableData.data[3].deaths
      ),
      createData(
        getedTableData.data[4].countryInfo.flag,
        getedTableData.data[4].country,
        getedTableData.data[4].cases,
        getedTableData.data[4].recovered,
        getedTableData.data[4].deaths
      ),
    ];
  }

  return (
    <Box className={styles.section} py="4rem">
      <Typography variant="h4" align="center" gutterBottom>
        TOP 5 COUNTRIES
      </Typography>
      <TableContainer>
        <Table
          className={styles.table}
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
                  <img
                    className={styles.img}
                    src={row.flag}
                    alt={`${row.name} Flag`}
                  />{" "}
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
    </Box>
  );
}
