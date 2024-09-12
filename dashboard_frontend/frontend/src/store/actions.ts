import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ChartData } from './types';

export const fetchChartData = createAsyncThunk<ChartData, void>(
  'chartData/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const [candlestick, line, bar, pie] = await Promise.all([
        axios.get('/api/candlestick-data'),
        axios.get('/api/line-chart-data'),
        axios.get('/api/bar-chart-data'),
        axios.get('/api/pie-chart-data'),
      ]);

      return {
        candlestick: candlestick.data.data,
        line: {
          labels: line.data.labels,
          data: line.data.data,
        },
        bar: {
          labels: bar.data.labels,
          data: bar.data.data,
        },
        pie: {
          labels: pie.data.labels,
          data: pie.data.data,
        },
      };
    } catch (error) {
      return rejectWithValue('Failed to fetch chart data. Please try again later.(mew)');
    }
  }
);