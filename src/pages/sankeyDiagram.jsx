import React from 'react';
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

import data from "../data/sankey/worldRefugeeStats/ap-world-overview";
import "../styles.css";

HighchartsSankey(Highcharts);

function SankeyPage() {
    return (
        <div>
            <h1>this is the Sankey Page</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={data}
                // constructorType="sankyChart"
            />
        </div>
        
        
    );
}

export default SankeyPage;

