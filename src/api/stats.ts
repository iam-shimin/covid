import get from './__http__';

export default function getStatsForStates() {
	return get('/data.json')
		.then(response => response.data.statewise)
}