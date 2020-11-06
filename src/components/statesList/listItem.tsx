import React from 'react';
import { Link } from 'react-router-dom';

import './listItem.css';

interface ListItemProps {
	state: string,
	statecode: string
}

export default function ListItem({state, statecode}: ListItemProps) {
	return (
		<Link to={`/${statecode}`}>
			<div>
				<span>{state}</span>
			</div>
		</Link>
	)
}
