// src/store/slices/chartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { ChartState } from './types'; // Import the correct type for the slice state
import { fetchChartData } from './actions';

const initialState: ChartState = {
  chartData: {
    candlestick: null,
    line: null,
    bar: null,
    pie: null,
  },
  loading: false,
  error: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default chartSlice.reducer;
