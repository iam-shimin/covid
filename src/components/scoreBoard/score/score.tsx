import React from 'react';

import './score.css';

interface ScoreProps {
	color: string,
	label: string,
	count: string
}

export default function ScoreBoard({ color, label, count }: ScoreProps) {
	return (
		<div className="score-board" style={{color}}>
			<span className="score-board-label">{label}</span>
			<span className="score-board-count">{count}</span>
		</div>
	)
}
