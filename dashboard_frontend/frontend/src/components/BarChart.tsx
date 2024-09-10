import React from 'react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

interface BarChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Define a set of colors for the bars
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6666', '#d5a6bd'];

  // Map the labels and data to include color information
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
    color: COLORS[index % COLORS.length] // Use predefined colors
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBar width={500} height={300} data={chartData}>
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#fff' }} />
        <YAxis tick={{ fontSize: 12, fill: '#fff' }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend
          wrapperStyle={{ top: 0, right: 0, left: 'auto', marginBottom: 10 }}
          layout="vertical"
          verticalAlign="top"
          align="right"
        />
        <Bar dataKey="value">
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </RechartsBar>
    </ResponsiveContainer>
  );
};

export default BarChart;
