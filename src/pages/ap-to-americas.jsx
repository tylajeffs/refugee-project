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
      text: "Asia Pacific to the Americas"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Afghanistan","Argentina",12  ],
                ["Afghanistan","Brazil",149  ],
                ["Afghanistan","Canada",2263  ],
                ["Afghanistan","Chile",13  ],
                ["Afghanistan","Colombia",9  ],
                ["Afghanistan","Cuba",17  ],
                ["Afghanistan","Ecuador",147  ],
                ["Afghanistan","Mexico",5  ],
                ["Afghanistan","Panama",5  ],
                ["Afghanistan","Uruguay",5  ],
                ["Afghanistan","United States of America",1649  ],
                ["Afghanistan","Venezuela (Bolivarian Republic of)",10  ],
                ["Bangladesh","Argentina",5  ],
                ["Bangladesh","Brazil",23  ],
                ["Bangladesh","Canada",1840  ],
                ["Bangladesh","Ecuador",5  ],
                ["Bangladesh","Mexico",10  ],
                ["Bangladesh","Peru",26  ],
                ["Bangladesh","Trinidad and Tobago",8  ],
                ["Bangladesh","United States of America",2344  ],
                ["Bhutan","Brazil",31  ],
                ["Bhutan","United States of America",27  ],
                ["Cambodia","Canada",49  ],
                ["Cambodia","Mexico",24  ],
                ["Cambodia","United States of America",120  ],
                ["China","Brazil",23  ],
                ["China","Canada",5925  ],
                ["China","Ecuador",12  ],
                ["China","Mexico",5  ],
                ["China","United States of America",68937  ],
                ["Fiji","United States of America",114  ],
                ["China, Hong Kong SAR","Canada",17  ],
                ["China, Hong Kong SAR","United States of America",11  ],
                ["India","Argentina",23  ],
                ["India","Brazil",15  ],
                ["India","Canada",2638  ],
                ["India","Ecuador",5  ],
                ["India","Mexico",14  ],
                ["India","Peru",6  ],
                ["India","United States of America",9315  ],
                ["Indonesia","Canada",106  ],
                ["Indonesia","Costa Rica",5  ],
                ["Indonesia","United States of America",930  ],
                ["Iran (Islamic Rep. of)","Argentina",30  ],
                ["Iran (Islamic Rep. of)","Brazil",69  ],
                ["Iran (Islamic Rep. of)","Canada",7134  ],
                ["Iran (Islamic Rep. of)","Costa Rica",5  ],
                ["Iran (Islamic Rep. of)","Cuba",7  ],
                ["Iran (Islamic Rep. of)","Ecuador",67  ],
                ["Iran (Islamic Rep. of)","Mexico",41  ],
                ["Iran (Islamic Rep. of)","Panama",5  ],
                ["Iran (Islamic Rep. of)","Peru",6  ],
                ["Iran (Islamic Rep. of)","United States of America",5331  ],
                ["Japan","United States of America",7  ],
                ["Kazakhstan","Argentina",18  ],
                ["Kazakhstan","Canada",165  ],
                ["Kazakhstan","United States of America",1099  ],
                ["Kyrgyzstan","Argentina",5  ],
                ["Kyrgyzstan","Canada",70  ],
                ["Kyrgyzstan","Mexico",8  ],
                ["Kyrgyzstan","United States of America",1590  ],
                ["Rep. of Korea","Canada",33  ],
                ["Rep. of Korea","United States of America",21  ],
                ["Dem. People's Rep. of Korea","Canada",255  ],
                ["Dem. People's Rep. of Korea","United States of America",6  ],
                ["Lao People's Dem. Rep.","Canada",5  ],
                ["Lao People's Dem. Rep.","United States of America",61  ],
                ["Sri Lanka","Argentina",36  ],
                ["Sri Lanka","Brazil",19  ],
                ["Sri Lanka","Canada",2455  ],
                ["Sri Lanka","Chile",5  ],
                ["Sri Lanka","Ecuador",18  ],
                ["Sri Lanka","Mexico",20  ],
                ["Sri Lanka","Paraguay",5  ],
                ["Sri Lanka","Turks and Caicos Islands",7  ],
                ["Sri Lanka","Trinidad and Tobago",5  ],
                ["Sri Lanka","United States of America",1007  ],
                ["Marshall Islands","United States of America",7  ],
                ["Malaysia","United States of America",88  ],
                ["Mongolia","Canada",149  ],
                ["Mongolia","United States of America",635  ],
                ["Myanmar","Canada",9  ],
                ["Myanmar","United States of America",1223  ],
                ["Nepal","Brazil",12  ],
                ["Nepal","Canada",25  ],
                ["Nepal","Ecuador",5  ],
                ["Nepal","United States of America",6271  ],
                ["Niue","United States of America",11  ],
                ["Pakistan","Argentina",39  ],
                ["Pakistan","Bolivia (Plurinational State of)",5  ],
                ["Pakistan","Brazil",376  ],
                ["Pakistan","Canada",7171  ],
                ["Pakistan","Costa Rica",5  ],
                ["Pakistan","Ecuador",29  ],
                ["Pakistan","Mexico",12  ],
                ["Pakistan","Trinidad and Tobago",9  ],
                ["Pakistan","United States of America",3818  ],
                ["Philippines","Brazil",5  ],
                ["Philippines","Canada",73  ],
                ["Philippines","United States of America",168  ],
                ["Papua New Guinea","Canada",5  ],
                ["Singapore","Canada",10  ],
                ["Singapore","United States of America",6  ],
                ["Viet Nam","Brazil",5  ],
                ["Viet Nam","Canada",30  ],
                ["Viet Nam","Ecuador",5  ],
                ["Viet Nam","United States of America",406  ],
                ["Thailand","United States of America",35  ],
                ["Tajikistan","Canada",42  ],
                ["Tajikistan","United States of America",298  ],
                ["Turkmenistan","Canada",29  ],
                ["Turkmenistan","United States of America",204  ],
                ["Timor-Leste","Canada",5  ],
                ["Uzbekistan","Canada",121  ],
                ["Uzbekistan","Ecuador",5  ],
                ["Uzbekistan","United States of America",1219  ]
              ],
            name: "Asia Pacific to the Americas"
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
