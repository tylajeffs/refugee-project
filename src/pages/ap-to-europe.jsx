import React from 'react';
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import HighchartsWheel from "highcharts/modules/dependency-wheel";

import data from "../data/dependencyWheel/regions/ap-to-europe";
import "../styles.css";

HighchartsSankey(Highcharts);
HighchartsWheel(Highcharts);

function ApToAp() {
    return (
        <div>
            <h1>Asia Pacific to Europe</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={data}
                // constructorType="sankyChart"
            />
        </div>
        
        
    );
}

export default ApToAp;

