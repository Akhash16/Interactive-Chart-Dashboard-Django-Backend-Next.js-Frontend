import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface CandlestickChartProps {
  data: {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {


  console.log('type of data:', typeof data);

    const chartData = data['data'].map((item: { x: any; open: any; high: any; low: any; close: any; }) => ({
      x: item.x,
      y: [item.open, item.high, item.low, item.close],
    }));
    console.log('chartData:', chartData);
  
  const options = {
    chart: {
      type: 'candlestick',
      height: 150,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };


  const series = [
    {
      data: chartData,
    },
  ];

  // const series = [
  //   {
  //     data: [
  //       {
  //         x: '2023-01-01',
  //         y: [30, 40, 25, 35],
  //       },
  //       {
  //         x: '2023-01-02',
  //         y: [35, 45, 30, 40],
  //       },
  //       // Add more data points as needed
  //     ],
  //   },
  // ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="candlestick" />
    </div>
  );
};

export default CandlestickChart;