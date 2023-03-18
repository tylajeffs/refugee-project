import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsDependencyWheel from 'highcharts/modules/dependency-wheel';
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsSankey(Highcharts);
HighchartsDependencyWheel(Highcharts);

const getOptions = (type) => ({
  chart: {
    type,
    width: 800,
    height: 600,
  },
  title: {
    text: _.startCase(`${type} chart`),
  },
  series: [
    {
      keys: ['from', 'to', 'weight'],
      dataLabels: {
        format: '{point.fromNode.name} → {point.toNode.name}: {point.weight}',
        nodeFormat: '{point.name}',
        color: 'black',
      },
      data: [
        ['A', 'B', 1],
        ['A', 'C', 1],
        ['A', 'D', 2],
        ['B', 'C', 2],
        ['C', 'D', 1],
        ['E', 'D', 3],
        ['E', 'F', 1],
      ],
    },
  ],
  credits: {
    enabled: false,
  },
});

function App() {
  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions('dependencywheel')}
    />
  );
}

export default App;