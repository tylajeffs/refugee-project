import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";

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
      text: "Asia Pacific to East and Horn of Africa"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Afghanistan","Kenya",12  ],
                ["Bangladesh","Somalia",6  ],
                ["Iran (Islamic Rep. of)","United Rep. of Tanzania",5  ],
                ["Iran (Islamic Rep. of)","Uganda",5  ],
                ["Sri Lanka","Kenya",9  ],
                ["Pakistan","Burundi",9  ],
                ["Pakistan","Kenya",9  ],
                ["Pakistan","Uganda",227  ]
              ],
            name: "Asia Pacific to East and Horn of Africa"
          }
    ]
  };

  //what will actually be displayed
  return (
    <div>
      <button onClick={() => handleTypeChange(type)}>
        Change Type To {type === "sankey" ? "dependencywheel" : "sankey"}
      </button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};


export default App;
