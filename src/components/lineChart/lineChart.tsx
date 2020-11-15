import React from 'react';
import Plot from 'react-plotly.js';

import { PLOT_LAYOUT } from '../../constants';

export default function LineChart({ data }: { data: any }) {

	if (!Array.isArray(data)) {
		return null;
	}
	
	const fields: { [_: string]: string} = {
		'active': 'totalconfirmed',
		'confirmed': 'dailyconfirmed',
		'deaths': 'totaldeceased',
		'recovered': 'dailyrecovered'
	};

	return (
		<Plot
			data={['active', 'confirmed', 'deaths', 'recovered'].map(i => ({
				name: i,
				type: 'scatter',
				...genXY(fields[i], data)
			}))}

			layout={PLOT_LAYOUT} />
	)
}


function genXY(key: string, data: any[]) {
	return {
		x: data.map(i => i.dateymd),
		y: data.map(i => parseInt(i[key]))
	};
}