import axios from "axios";

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`https://covid19.mathdro.id/api/countries`);

    return countries.map((c) => c.name);
  } catch (error) {
    return error;
  }
};

export const getData = async (country) => {
  let address = "https://covid19.mathdro.id/api";

  try {
    if (country) {
      address = `${address}/countries/${country}`;
    }

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(address);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const getTableData = async (id) => {
  try {
    const data = await axios.get(
      "https://disease.sh/v3/covid-19/countries?sort=cases"
    );
    return data;
  } catch (error) {
    return error;
  }
};
