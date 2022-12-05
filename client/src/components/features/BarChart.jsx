import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'last 7 - days orders'
    },
  },
};

const labels = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday'];

export const data = {
  labels,
  datasets: [
    {
      fill:true,
      label: 'orders',
      data: [2,3,5,6,8,7,7],
      borderColor: '#2ec4b6',
      backgroundColor: '#2ec4b6',
    },
  ],
};

export function BarChart() {
  return  <Line  height={80} options={options} data={data} />;
}
