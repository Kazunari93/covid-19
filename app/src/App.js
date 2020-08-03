import React from "react";

import { Cards, Chart, Country } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
