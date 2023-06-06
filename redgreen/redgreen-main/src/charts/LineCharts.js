import './Chart.css'
import React from 'react';
import ReactApexChart from 'react-apexcharts'


const LineCharts = () => {
    const series = [{
        name: 'TV',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Laptop',
        data: [11, 32, 45, 32, 34, 52, 41]
      },{
        name: 'Other',
        data: [41, 62, 35, 52, 34, 72, 21]
      }];
    const options = {
        chart: {
          height: 200,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      };
    return (
        <div>
            <ReactApexChart className="line-chart" options={options} series={series} type="area" />
        </div>
    );
};

export default LineCharts;