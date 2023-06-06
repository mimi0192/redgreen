import React from 'react';
import Chart from 'react-apexcharts'

const PieCharts = () => {
    return (
        <div style={{marginTop: "50px", display: "flex", justifyContent: "center"}}>
          <Chart
            type='donut'
            width={300}
            height={300}
            series={[45,75,56]}
            options={{
                labels:['TV', 'Laptop', 'Other'],
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show: true,
                                total:{
                                    show: true,
                                    fontSize: 12,
                                    color: "gray"
                                }
                            }
                        }
                    }
                },
                dataLabels:{
                    enabled:false
                }
            }}
          >
          </Chart>
        </div>
    );
};

export default PieCharts;