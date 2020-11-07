import React from 'react';
import Plot from 'react-plotly.js';

export default function LineChart() {
	return (
		<Plot
			data={['active', 'confirmed', 'deaths', 'recovered'].map(i => ({
				name: i,
				type: 'scatter',
				...genXY()
			}))}

			layout={{
				height: 400,
				width: 500
		}} />
	)
}


function genXY() {
	return {
		x: Array.from({length: 5}, (_: any, i: number) => i),
		y: Array.from({length: 5}, () => Math.floor(Math.random() * 1000))
	}
}