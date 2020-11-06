import React from 'react';
import Plot from 'react-plotly.js';

export default function LineChart() {

	// let data = lines.map(line => ({
	// 	name: line.name,
	// 	type: 'scatter',
	// 	x: line.data.map((_: any, i: number) => i),
	// 	y: line.data
	// }));
	
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