import React, { useState, useEffect } from "react";

import { Grid, FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import { getCountries } from "../../api";

const CountrySelector = ({ handleCountryChange }) => {
  const [getedCountries, setGetedCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setGetedCountries(await getCountries());
    };

    getData();
  }, [setGetedCountries]);

  return (
    <Grid container justify="center">
      <FormControl margin="normal">
        <InputLabel shrink htmlFor="country-select">
          Select a country.
        </InputLabel>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
          inputProps={{ id: "country-select" }}
        >
          <option value="">World</option>
          {getedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

export default CountrySelector;
