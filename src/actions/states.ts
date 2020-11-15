import { Dispatch } from 'redux';

import fetchStats from 'api/stats';
import {
	STATS_LOADING,
	STATS_ERROR,
	STATS_SUCCESS
} from '../constants';

export default function loadStats() {
	return (dispatch: Dispatch) => {
		dispatch({type: STATS_LOADING});
		fetchStats()
			.then(payload => dispatch({type: STATS_SUCCESS, payload}))
			.catch(error => dispatch({type: STATS_ERROR, error}));
	}
}