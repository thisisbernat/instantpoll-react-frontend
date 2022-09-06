import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

export default function BarChart({ chartData }) {
	let delayed;
	return <Bar data={chartData} options={{
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: true
				}
			},
			y: {
				grid: {
					display: false,
					drawBorder: true,
					drawOnChartArea: true,
					drawTicks: false
				},
				ticks: {
					stepSize: 1
				}
			}
		},
		animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    }
	}} />
}

