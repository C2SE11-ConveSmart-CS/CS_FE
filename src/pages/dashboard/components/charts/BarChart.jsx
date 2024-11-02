import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function BarChart({ className }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
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
        ticks: {
          stepSize: 20,
        },
      },
    },
    maintainAspectRatio: false,
  }

  const labels = Array.from({ length: 30 }, (_, i) => (i + 1).toString())

  const data = {
    labels,
    datasets: [
      {
        label: 'Đơn hàng thành công',
        data: labels.map(() => Math.floor(Math.random() * 60)),
        backgroundColor: '#29651E',
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
      {
        label: 'Đơn hàng không thành công',
        data: labels.map(() => Math.floor(Math.random() * 40)),
        backgroundColor: '#86CF78',
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  }

  return (
    <div className={className}>
      <Bar options={options} data={data} />
    </div>
  )
}
