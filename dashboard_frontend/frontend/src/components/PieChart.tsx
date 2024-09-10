import React from 'react';
import { PieChart as RechartsPie, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

interface PieChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}


const PieChart: React.FC<PieChartProps> = ({ data }) => {
  // Map the labels and data to include color information
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
    color: label
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
    <RechartsPie width={500} height={300}>
      <Pie
        data={chartData}
        cx={200}
        cy={150}
        outerRadius={80}
        dataKey="value"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPie>
    </ResponsiveContainer>
  );
};

export default PieChart;
