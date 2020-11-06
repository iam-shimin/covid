import React from 'react';

import { IStatForState } from 'reducers/store';
import ListItem from './listItem';
import Search from './search';

interface SidebarProps {
	listData: IStatForState[],
	className?: string
}

export default function Sidebar({ listData, className }: SidebarProps) {

	const [showAll, setShowAll] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState('');
	const dataSortedByCases = listData.slice().sort((a, b) => parseInt(b.active) - parseInt(a.active));
	const itemsMatchingSearch = searchQuery
		? dataSortedByCases.filter(item => item.state.toLowerCase().includes(searchQuery.toLowerCase()))
		: dataSortedByCases;
	const shouldSliceResults = itemsMatchingSearch.length > 5 && !showAll;
	const itemsToBeRendered = shouldSliceResults
		? itemsMatchingSearch.slice(0, 5)
		: itemsMatchingSearch;
	
	return (
		<div className={className}>
			<Search onSearch={(value: string) => setSearchQuery(value)} />

			<div className="state-list">
				{itemsToBeRendered.map(stateData => <ListItem
					key={stateData.statecode}
					state={stateData.state}
					statecode={stateData.statecode} />)}
			</div>

			{shouldSliceResults && <button onClick={() => setShowAll(true)}>Show All</button>}
		</div>
	)
}