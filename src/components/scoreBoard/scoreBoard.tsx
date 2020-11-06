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
		active: 'Total Active Cases',
		confirmed: 'Total Confirmed Cases',
		deaths: 'Total Deaths',
		recovered: 'Total Recovered'
	}

	return (
		<div className="scores">
			{itemsToShowScores.map(item => <Score
				key={item}
				color={item === 'recovered'? 'green': 'red'}
				label={scoreLabels[item]}
				count={data[item]} />)}
		</div>
	)
}
