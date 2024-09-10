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


    const chartData = data.map((item: { x: string; open: number; high: number; low: number; close: number; }) => ({
      x: item.x,
      y: [item.open, item.high, item.low, item.close],
    }));
  
  
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'candlestick',
        height: 350,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: false,
          },
          autoSelected: 'zoom',
          
        },
      },
      
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'dd MMM yy',
        },
        tooltip: {
          enabled: true,
        },
        title: {text: 'Date'},
      },
      yaxis: {
        tooltip: {
          enabled: true,
          offsetX: 10,
        },
        title: {
          text: 'Price',
        },
        min: 0,        // Set minimum value for the y-axis
      max: 100,      // Set maximum value for the y-axis
      tickAmount: 5,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00C292',  // Color for upward (bullish) candles
            downward: '#FF0000', // Color for downward (bearish) candles
          },
        },
        
      },
      
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val) => `$${val.toFixed(2)}`,
        },
        style: {
          fontSize: '12px', // Font size of tooltip text
        
        },
        theme: 'dark', // Tooltip theme ('light' or 'dark')
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              height: 300,
            },
            xaxis: {
              labels: {
                rotate: -45,
              },
            },
          },
        },
      ],
    };


  const series = [
    {
      data: chartData,
    },
  ];



  return (
    <div>
      <ReactApexChart options={options} series={series} type="candlestick" />
    </div>
  );
};

export default CandlestickChart;