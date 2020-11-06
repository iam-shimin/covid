import get from './__http__';

export default function getStatsForDistricts() {
	return get('/state_district_wise.json')
		.then(response => response.data);
}