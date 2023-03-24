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
      text: "Asia Pacific to Southern Africa"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Afghanistan","Madagascar",20  ],
                ["Afghanistan","South Africa",5  ],
                ["Bangladesh","South Africa",200  ],
                ["India","South Africa",5  ],
                ["Sri Lanka","South Africa",10  ],
                ["Pakistan","Madagascar",99  ],
                ["Pakistan","Mauritius",5  ],
                ["Pakistan","South Africa",11  ],
                ["Solomon Islands","South Africa",7  ]
              ],
            name: "Asia Pacific to Southern Africa"
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
