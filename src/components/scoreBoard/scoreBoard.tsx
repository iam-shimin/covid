import React from 'react';
import { IStatForState } from 'reducers/store';

import Score from './score';
import './scoreBoard.css';

interface ScoreboardProps {
	data: IStatForState
}

export default function ScoreBoard({data}: ScoreboardProps) {

	const itemsToShowScores = [	'active', 'confirmed', 'deaths', 'recovered' ] as const;
	const scoreLabels = {
		active: 'Active Cases',
		confirmed: 'Confirmed Cases',
		deaths: 'Deaths',
		recovered: 'Recovered'
	};
	const labelColors = {
		active: 'blue',
		confirmed: 'orange',
		deaths: 'red',
		recovered: 'green'
	};

	return (
		<div className="scores">
			{itemsToShowScores.map(item => <Score
				key={item}
				color={labelColors[item]}
				label={scoreLabels[item]}
				count={data[item]} />)}
		</div>
	)
}
