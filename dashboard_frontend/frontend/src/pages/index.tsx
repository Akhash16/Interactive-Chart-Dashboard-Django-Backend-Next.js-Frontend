// src/pages/index.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
// import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

import dynamic from 'next/dynamic';

const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), {
  ssr: false
});

interface ChartData {
  candlestick: any;
  line: any;
  bar: any;
  pie: any;
}

export default function Dashboard() {
  const [chartData, setChartData] = useState<ChartData>({
    candlestick: null,
    line: null,
    bar: null,
    pie: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestick, line, bar, pie] = await Promise.all([
          axios.get('http://localhost:8000/api/candlestick-data/'),
          axios.get('http://localhost:8000/api/line-chart-data/'),
          axios.get('http://localhost:8000/api/bar-chart-data/'),
          axios.get('http://localhost:8000/api/pie-chart-data/'),
        ]);

        setChartData({
          candlestick: candlestick.data,
          line: line.data,
          bar: bar.data,
          pie: pie.data,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch chart data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2>
          {chartData.candlestick && <CandlestickChart data={chartData.candlestick} />}
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          {chartData.line && <LineChart data={chartData.line} />}
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
          {chartData.bar && <BarChart data={chartData.bar} />}
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          {chartData.pie && <PieChart data={chartData.pie} />}
        </div>
      </div>
    </div>
  );
}