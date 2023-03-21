import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

import data from "./data/sankey/regionRefugeeStats/asiaPacific/ap-to-ap";
import "./styles.css";

HighchartsSankey(Highcharts);


function App() {
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={data}
        // constructorType="sankyChart"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
