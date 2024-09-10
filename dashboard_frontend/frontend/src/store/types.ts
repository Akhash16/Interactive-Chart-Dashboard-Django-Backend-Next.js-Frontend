export interface CandlestickData {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }
  
  export interface LineChartData {
    labels: string[];
    data: number[];
  }
  
  export interface BarChartData {
    labels: string[];
    data: number[];
  }
  
  export interface PieChartData {
    labels: string[];
    data: number[];
  }
  
  export interface ChartData {
    candlestick: CandlestickData[] | null;
    line: LineChartData | null;
    bar: BarChartData | null;
    pie: PieChartData | null;
  }
  
  export interface RootState {
    chart: any;
    chartData: ChartData;
    loading: boolean;
    error: string | null;
  }
  