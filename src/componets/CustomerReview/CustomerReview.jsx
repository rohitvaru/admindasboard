import React from 'react'
import './CustomerReview.css'
import Chart from "react-apexcharts";


const CustomerReview = () => {
  const data = {
    series:[
      {
        name : "Review",
        data: [10,20,30,40,50,60,70],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35
      },
      fill: {
        color: ["#fff"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-09-19T05:30:00.000Z",
          "2023-09-19T07:00:00.000Z",
          "2023-09-19T08:00:00.000Z",
          "2023-09-19T09:00:00.000Z",
          "2023-09-19T10:00:00.000Z",
          "2023-09-19T10:30:00.000Z",
          "2023-09-19T11:30:00.000Z"
        ],
      },
      // xaxis: {
      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      // }
    },
  };
  return (
    <div className="CustomerReview">
      <div className='Chart-W'>
        <Chart type='area' series={data.series} options={data.options}/>
      </div>
    </div>
  )
}

export default CustomerReview
