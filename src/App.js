import React from "react";

import {
  NavBar,
  CardsContainer,
  Chart,
  CountrySelector,
  TablesContainer,
} from "./components";
import { getData } from "./api";

class App extends React.Component {
  state = { data: {}, country: "" };

  async componentDidMount() {
    const getedData = await getData();
    this.setState({ data: getedData });
  }

  handleCountryChange = async (country) => {
    const getedData = await getData(country);
    this.setState({ data: getedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <CardsContainer data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <TablesContainer />
      </React.Fragment>
    );
  }
}

export default App;
