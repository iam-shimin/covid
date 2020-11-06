import React from 'react';
import Plot from 'react-plotly.js';

interface PieChartProps {
	labels: any[],
	values: number[]
}

export default function PieChart({labels, values}: PieChartProps) {
	return (
		<Plot
			data={[
				{
					values,
					labels,
					type: 'pie'
				}
			]}

			layout={{
				height: 400,
				width: 500
			}} />
	)
}
