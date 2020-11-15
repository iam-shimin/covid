import React from 'react';
import Plot from 'react-plotly.js';

import { PLOT_LAYOUT } from '../../constants';

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

			layout={PLOT_LAYOUT} />
	)
}
