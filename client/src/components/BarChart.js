import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const BarChartComponent = ({ chartsData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartsData} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimal={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};
