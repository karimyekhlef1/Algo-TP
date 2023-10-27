import React from 'react';
import { Scatter } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'Scatter Plot',
      data: [
        {
          x: 50,
          y: 49,
        },
        {
          x: 35,
          y: 30,
        },
        // {
        //   x: -14,
        //   y: 25,
        // },
        // {
        //   x: -21,
        //   y: -14,
        // },
        // {
        //   x: 46,
        //   y: 49,
        // },
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'linear', // Use 'linear' scale for the X-axis
      position: 'bottom',
      title: {
        display: true,
        text: 'X-Axis',
      },
    },
    y: {
    //   type: 'linear', // Use 'linear' scale for the Y-axis
      position: 'left',
      title: {
        display: true,
        text: 'Y-Axis',
      },
    },
  },
};

const ScatterChart = () => {
  return (
    <div>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;
