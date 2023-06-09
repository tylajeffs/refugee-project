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
  const total = "4,088,444";

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
      text: "Asia Pacific to Asia Pacific"
    },
    chart: {
      type
    },
    series: [
        {
            keys: ["from", "to", "weight"],
            data: [
                ["Afghanistan","Australia",9648  ],
                ["Afghanistan","China",30  ],
                ["Afghanistan","Fiji",8  ],
                ["Afghanistan","China, Hong Kong SAR",11  ],
                ["Afghanistan","India",9678  ],
                ["Afghanistan","Indonesia",5828  ],
                ["Afghanistan","Iran (Islamic Rep. of)",778054  ],
                ["Afghanistan","Japan",84  ],
                ["Afghanistan","Kazakhstan",327  ],
                ["Afghanistan","Kyrgyzstan",213  ],
                ["Afghanistan","Rep. of Korea",46  ],
                ["Afghanistan","Sri Lanka",113  ],
                ["Afghanistan","Malaysia",1604  ],
                ["Afghanistan","Nepal",52  ],
                ["Afghanistan","Nauru",28  ],
                ["Afghanistan","New Zealand",65  ],
                ["Afghanistan","Pakistan",1490562  ],
                ["Afghanistan","Philippines",9  ],
                ["Afghanistan","Papua New Guinea",30  ],
                ["Afghanistan","Thailand",168  ],
                ["Afghanistan","Tajikistan",10719  ],
                ["Afghanistan","Turkmenistan",10  ],
                ["Afghanistan","Uzbekistan",13032  ],
                ["Australia","Malaysia",5  ],
                ["Bangladesh","Australia",393  ],
                ["Bangladesh","Fiji",5  ],
                ["Bangladesh","China, Hong Kong SAR",13  ],
                ["Bangladesh","India",8  ],
                ["Bangladesh","Japan",18  ],
                ["Bangladesh","Rep. of Korea",129  ],
                ["Bangladesh","Malaysia",37  ],
                ["Bangladesh","Nepal",5  ],
                ["Bangladesh","Nauru",17  ],
                ["Bangladesh","New Zealand",10  ],
                ["Bangladesh","Papua New Guinea",15  ],
                ["Bhutan","Australia",5  ],
                ["Bhutan","Nepal",6365  ],
                ["Cambodia","Australia",67  ],
                ["Cambodia","Malaysia",77  ],
                ["Cambodia","Philippines",13  ],
                ["Cambodia","Thailand",317  ],
                ["China","Australia",1579  ],
                ["China","India",73407  ],
                ["China","Indonesia",11  ],
                ["China","Japan",77  ],
                ["China","Kazakhstan",6  ],
                ["China","Rep. of Korea",50  ],
                ["China","Malaysia",46  ],
                ["China","New Zealand",255  ],
                ["China","Philippines",5  ],
                ["China","Thailand",181  ],
                ["Fiji","Australia",276  ],
                ["Fiji","New Zealand",16  ],
                ["China, Hong Kong SAR","Australia",5  ],
                ["India","Australia",475  ],
                ["India","Malaysia",5  ],
                ["India","Nauru",7  ],
                ["India","New Zealand",14  ],
                ["Indonesia","Australia",235  ],
                ["Indonesia","China, Hong Kong SAR",12  ],
                ["Indonesia","Malaysia",946  ],
                ["Indonesia","Nauru",5  ],
                ["Indonesia","New Zealand",6  ],
                ["Indonesia","Papua New Guinea",11601  ],
                ["Iran (Islamic Rep. of)","Afghanistan",38  ],
                ["Iran (Islamic Rep. of)","Australia",12701  ],
                ["Iran (Islamic Rep. of)","China",5  ],
                ["Iran (Islamic Rep. of)","India",58  ],
                ["Iran (Islamic Rep. of)","Indonesia",300  ],
                ["Iran (Islamic Rep. of)","Japan",19  ],
                ["Iran (Islamic Rep. of)","Rep. of Korea",62  ],
                ["Iran (Islamic Rep. of)","Sri Lanka",24  ],
                ["Iran (Islamic Rep. of)","Malaysia",274  ],
                ["Iran (Islamic Rep. of)","Nepal",9  ],
                ["Iran (Islamic Rep. of)","Nauru",508  ],
                ["Iran (Islamic Rep. of)","New Zealand",107  ],
                ["Iran (Islamic Rep. of)","Pakistan",39  ],
                ["Iran (Islamic Rep. of)","Philippines",73  ],
                ["Iran (Islamic Rep. of)","Papua New Guinea",74  ],
                ["Iran (Islamic Rep. of)","Thailand",87  ],
                ["Iran (Islamic Rep. of)","Tajikistan",5  ],
                ["Japan","Australia",9  ],
                ["Kazakhstan","Australia",5  ],
                ["Kazakhstan","Rep. of Korea",5  ],
                ["Kyrgyzstan","Australia",12  ],
                ["Rep. of Korea","Australia",24  ],
                ["Lao People's Dem. Rep.","Australia",5  ],
                ["Lao People's Dem. Rep.","Thailand",8  ],
                ["Sri Lanka","Australia",3935  ],
                ["Sri Lanka","China, Hong Kong SAR",20  ],
                ["Sri Lanka","India",92431  ],
                ["Sri Lanka","Indonesia",407  ],
                ["Sri Lanka","Japan",59  ],
                ["Sri Lanka","Rep. of Korea",8  ],
                ["Sri Lanka","Malaysia",795  ],
                ["Sri Lanka","Nepal",19  ],
                ["Sri Lanka","Nauru",77  ],
                ["Sri Lanka","New Zealand",46  ],
                ["Sri Lanka","Philippines",18  ],
                ["Sri Lanka","Papua New Guinea",6  ],
                ["Sri Lanka","Thailand",106  ],
                ["Malaysia","Australia",687  ],
                ["Malaysia","Nauru",5  ],
                ["Malaysia","New Zealand",17  ],
                ["Mongolia","Australia",15  ],
                ["Mongolia","New Zealand",6  ],
                ["Myanmar","Australia",407  ],
                ["Myanmar","Bangladesh",918898  ],
                ["Myanmar","Cambodia",8  ],
                ["Myanmar","India",35832  ],
                ["Myanmar","Indonesia",480  ],
                ["Myanmar","Japan",583  ],
                ["Myanmar","Rep. of Korea",396  ],
                ["Myanmar","Sri Lanka",35  ],
                ["Myanmar","Malaysia",120598  ],
                ["Myanmar","Nepal",377  ],
                ["Myanmar","Nauru",71  ],
                ["Myanmar","New Zealand",12  ],
                ["Myanmar","Pakistan",23  ],
                ["Myanmar","Philippines",10  ],
                ["Myanmar","Papua New Guinea",5  ],
                ["Myanmar","Thailand",96086  ],
                ["Nepal","Australia",100  ],
                ["Nepal","China, Hong Kong SAR",8  ],
                ["Nepal","Rep. of Korea",5  ],
                ["Nepal","Malaysia",11  ],
                ["Nepal","Nauru",10  ],
                ["Nepal","New Zealand",5  ],
                ["Nepal","Thailand",5  ],
                ["Nauru","Australia",5  ],
                ["New Zealand","Australia",26  ],
                ["Pakistan","Afghanistan",66911  ],
                ["Pakistan","Australia",5348  ],
                ["Pakistan","China",32  ],
                ["Pakistan","Fiji",5  ],
                ["Pakistan","China, Hong Kong SAR",25  ],
                ["Pakistan","Indonesia",281  ],
                ["Pakistan","Iran (Islamic Rep. of)",10  ],
                ["Pakistan","Japan",34  ],
                ["Pakistan","Rep. of Korea",118  ],
                ["Pakistan","Sri Lanka",709  ],
                ["Pakistan","Malaysia",3632  ],
                ["Pakistan","Nepal",186  ],
                ["Pakistan","Nauru",29  ],
                ["Pakistan","New Zealand",54  ],
                ["Pakistan","Philippines",103  ],
                ["Pakistan","Papua New Guinea",27  ],
                ["Pakistan","Thailand",1578  ],
                ["Philippines","Australia",43  ],
                ["Philippines","China, Hong Kong SAR",8  ],
                ["Philippines","Malaysia",20  ],
                ["Philippines","New Zealand",10  ],
                ["Papua New Guinea","Australia",497  ],
                ["Papua New Guinea","New Zealand",5  ],
                ["Singapore","Australia",6  ],
                ["Solomon Islands","Australia",25  ],
                ["Viet Nam","Australia",323  ],
                ["Viet Nam","Cambodia",16  ],
                ["Viet Nam","China",303107  ],
                ["Viet Nam","Indonesia",15  ],
                ["Viet Nam","Malaysia",5  ],
                ["Viet Nam","New Zealand",7  ],
                ["Viet Nam","Philippines",18  ],
                ["Viet Nam","Thailand",961  ],
                ["Thailand","Australia",22  ],
                ["Thailand","Rep. of Korea",10  ],
                ["Thailand","Malaysia",26  ],
                ["Thailand","Philippines",5  ],
                ["Tajikistan","Pakistan",7  ],
                ["Turkmenistan","Kyrgyzstan",5  ],
                ["Timor-Leste","Australia",6  ],
                ["Tonga","Australia",28  ],
                ["Uzbekistan","Australia",19  ],
                ["Uzbekistan","Iran (Islamic Rep. of)",7  ],
                ["Uzbekistan","Kazakhstan",5  ],
                ["Uzbekistan","Rep. of Korea",9  ],
                ["Samoa","Australia",5  ]
              ],
            name: "Asia Pacific to Asia Pacific"
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
