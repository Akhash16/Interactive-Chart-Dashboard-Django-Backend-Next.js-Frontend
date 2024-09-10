// src/pages/index.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/types';
import { fetchChartData } from '../store/actions';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), {
  ssr: false
});

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { chartData, loading, error } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

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