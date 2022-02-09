import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chart_title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {/* aspect : if width is 4 unit height is 1 unit */}
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          {/* dataKey value should be same as data provided */}
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray=" 5 5" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
