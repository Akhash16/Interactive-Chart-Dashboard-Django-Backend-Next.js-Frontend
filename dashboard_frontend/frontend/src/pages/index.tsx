import { useEffect } from 'react'; // Importing useEffect hook to handle side effects in the component
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks for interacting with the Redux store
import dynamic from 'next/dynamic'; // Importing Next.js dynamic import function for code splitting
import { AppDispatch } from '../store/store'; // Importing the AppDispatch type from the store
import { RootState } from '../store/types'; // Importing RootState type from the store to define the shape of the Redux state
import { fetchChartData } from '../store/actions'; // Importing the action to fetch chart data from the API
import LineChart from '../components/LineChart'; // Importing the LineChart component
import BarChart from '../components/BarChart'; // Importing the BarChart component
import PieChart from '../components/PieChart'; // Importing the PieChart component

// Dynamically importing the CandlestickChart component without server-side rendering (ssr: false)
const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), {
  ssr: false
});

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>(); // Hook to dispatch actions to the Redux store
  // Extracting chart data, loading state, and error state from the Redux store
  const { chartData, loading, error } = useSelector((state: RootState) => state.chart);

  // useEffect hook to fetch chart data when the component mounts
  useEffect(() => {
    dispatch(fetchChartData()); // Dispatching the fetchChartData action to get data from the backend
  }, [dispatch]); // Dependency array with dispatch ensures that the effect only runs once after the component mounts

  // If data is loading, show a loading message
  if (loading) return <div className="text-center mt-8">Loading...</div>;
  
  // If there is an error, display the error message
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1> {/* Page heading */}
      
      {/* Grid layout for charts, responsive for different screen sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Candlestick chart container */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2> {/* Chart heading */}
          {/* Render the CandlestickChart if the data is available */}
          {chartData.candlestick && <CandlestickChart data={chartData.candlestick} />}
        </div>
        
        {/* Line chart container */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2> {/* Chart heading */}
          {/* Render the LineChart if the data is available */}
          {chartData.line && <LineChart data={chartData.line} />}
        </div>
        
        {/* Bar chart container */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2> {/* Chart heading */}
          {/* Render the BarChart if the data is available */}
          {chartData.bar && <BarChart data={chartData.bar} />}
        </div>
        
        {/* Pie chart container */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2> {/* Chart heading */}
          {/* Render the PieChart if the data is available */}
          {chartData.pie && <PieChart data={chartData.pie} />}
        </div>
      </div>
    </div>
  );
}
