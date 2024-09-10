import { LineChart as RechartsLine, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

interface LineChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLine width={300} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="2 4" />
        <XAxis dataKey="name" stroke="#ccc"  />
        <YAxis stroke="#ccc" />
        <Tooltip
          contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#8884d8" 
          strokeWidth={3}
          dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }} // Custom dot styling
        />
      </RechartsLine>
    </ResponsiveContainer>
  );
};

export default LineChart;
