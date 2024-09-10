import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';
import { fetchChartData } from './actions';

const initialState: RootState = {
    chartData: {
        candlestick: null,
        line: null,
        bar: null,
        pie: null,
    },
    loading: false,
    error: null,
    chart: undefined
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