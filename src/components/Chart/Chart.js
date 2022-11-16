import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const max = Math.max(...props.dataPoints.map((dataPoint) => dataPoint.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
