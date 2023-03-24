import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import HighchartSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartsReact from "highcharts-react-official";
import data from "./data/dependencyWheel/regions/ap-to-ap"

HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);

const Viz = () => {
  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={data}
        // constructorType="dependencywheel"
      />
          
    
  );
};

render(<Viz />, document.getElementById("root"));
