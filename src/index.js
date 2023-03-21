import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import HighchartSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartsReact from "highcharts-react-official";

HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);

const Viz = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        series: [
          {
            type: "dependencywheel",
            data: [
              {
                from: "Category1",
                to: "Category2",
                weight: 2
              },
              {
                from: "Category1",
                to: "Category3",
                weight: 5
              }
            ]
          }
        ]
      }}
    />
  );
};

render(<Viz />, document.getElementById("root"));
