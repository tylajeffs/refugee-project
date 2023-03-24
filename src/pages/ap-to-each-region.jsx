import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import "../css/styles.css";

HighchartsSankey(Highcharts);
HighchartsWheel(Highcharts);


const App = () => {
  //set the chart type to start out as sankey  
  const [type, setType] = useState("sankey");

  //handle button click to change chart type
  const handleTypeChange = (type) => {
    if (type === "sankey") {
      setType("dependencywheel");
    } else {
      setType("sankey");
    }
  };

  //chart settings
  const options = {
    title: {
      text: "Asia Pacific to Each Region"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Asia Pacific","Asia  Pacific",4088444  ],
                ["Asia Pacific","Europe",672925  ],
                ["Asia Pacific","West and Central Africa",145  ],
                ["Asia Pacific","The Americas",139082  ],
                ["Asia Pacific","Southern Africa",362  ],
                ["Asia Pacific","Middle East and North Africa",5787  ],
                ["Asia Pacific","East and Horn of Africa",282  ]
              ],
            name: "Asia Pacific to Each Region"
          }
    ]
  };

  //what will actually be displayed
  return (
    <div>
      <button className="button" onClick={() => handleTypeChange(type)}>
        Change Type To {type === "sankey" ? "dependencywheel" : "sankey"}
      </button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};


export default App;
