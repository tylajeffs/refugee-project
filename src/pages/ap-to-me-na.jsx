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

  //set total amount of refugees 
  const total = "5,787";

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
      text: "Asia Pacific to Middle East and North Africa"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Afghanistan","Egypt",43  ],
                ["Afghanistan","Iraq",11  ],
                ["Afghanistan","Jordan",8  ],
                ["Afghanistan","Lebanon",24  ],
                ["Afghanistan","Morocco",12  ],
                ["Afghanistan","Syrian Arab Rep.",1119  ],
                ["Afghanistan","United Arab Emirates",5  ],
                ["China","Mauritania",5  ],
                ["China","Saudi Arabia",14  ],
                ["Iran (Islamic Rep. of)","Iraq",4116  ],
                ["Iran (Islamic Rep. of)","Israel",6  ],
                ["Iran (Islamic Rep. of)","Jordan",5  ],
                ["Iran (Islamic Rep. of)","Kuwait",9  ],
                ["Iran (Islamic Rep. of)","Lebanon",35  ],
                ["Iran (Islamic Rep. of)","Syrian Arab Rep.",43  ],
                ["Iran (Islamic Rep. of)","Tunisia",8  ],
                ["Iran (Islamic Rep. of)","United Arab Emirates",5  ],
                ["Iran (Islamic Rep. of)","Yemen",5  ],
                ["Dem. People's Rep. of Korea","Israel",5  ],
                ["Sri Lanka","Jordan",9  ],
                ["Pakistan","Jordan",5  ],
                ["Pakistan","Lebanon",6  ],
                ["Pakistan","Morocco",16  ],
                ["Pakistan","Oman",5  ],
                ["Pakistan","Qatar",5  ],
                ["Pakistan","Syrian Arab Rep.",221  ],
                ["Pakistan","United Arab Emirates",5  ],
                ["Philippines","Jordan",5  ],
                ["Viet Nam","Yemen",15  ],
                ["Tajikistan","Egypt",12  ],
                ["Turkmenistan","Egypt",5  ]
              ],
            name: "Asia Pacific to Middle East and North Africa"
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

      <div className="total">
        <button >Total: {total}</button>
      </div>
    </div>
  );
};


export default App;
