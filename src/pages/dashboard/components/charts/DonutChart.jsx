/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DonutChart({ value, percentage }) {
  const options = {
    responsive: true,
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  }

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#00B69B', '#F4F5F9'],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut options={options} data={data} />
    </div>
  )
}
