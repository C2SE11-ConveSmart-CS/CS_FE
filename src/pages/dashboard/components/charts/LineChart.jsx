import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function LineChart({ className }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Hiển thị legend
        position: 'bottom', // Đặt vị trí của legend ở dưới biểu đồ
      },

      Tooltip : {
        callbacks : {
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || '';
            const dataValue = tooltipItem.raw;
            return `${datasetLabel}: ${dataValue}`; // Hiển thị label và giá trị
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#F4F5F9',
        },
      },
    },
    maintainAspectRatio: false,
  }

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

  const data = {
    labels,
    datasets: [
      {
        label: 'KH tiềm năng',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: '#165BAA',
        backgroundColor: '#165BAA',
        tension: 0.4,
      },

      {
        label: 'KH cá nhân',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: '#FFA500',
        backgroundColor: '#FFA500',
        tension: 0.5,
      },

      {
        label: 'KH doanh nghiệp',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: '#00FF00',
        backgroundColor: '#00FF00',
        tension: 0.4,
      },
    ],
  }

  return (
    <div className={className}>
      <Line options={options} data={data} />
    </div>
  )
}
