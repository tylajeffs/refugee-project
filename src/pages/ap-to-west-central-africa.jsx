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
      text: "Asia Pacific to West and Central Africa"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Cambodia","Cote d'Ivoire",8  ],
                ["Iran (Islamic Rep. of)","Chad",5  ],
                ["Iran (Islamic Rep. of)","Cameroon",5  ],
                ["Iran (Islamic Rep. of)","Cote d'Ivoire",7  ],
                ["Iran (Islamic Rep. of)","Nigeria",5  ],
                ["Sri Lanka","Benin",5  ],
                ["Sri Lanka","Guinea",10  ],
                ["Pakistan","Benin",5  ],
                ["Pakistan","Ghana",60  ],
                ["Pakistan","Liberia",5  ],
                ["Pakistan","Mali",11  ],
                ["Viet Nam","Cote d'Ivoire",5  ],
                ["Uzbekistan","Ghana",9  ]
              ],
            name: "Asia Pacific to West and Central Africa"
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
