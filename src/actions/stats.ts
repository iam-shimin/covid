import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import fetchStats from 'api/stats';
import {
	STATS_LOADING,
	STATS_ERROR,
	STATS_SUCCESS
} from '../constants';

export default function loadStats(): ThunkAction<void, IStatsReduxState, unknown, StatsAction> {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		dispatch({type: STATS_LOADING});
		try {
			const payload = await fetchStats();
			dispatch({type: STATS_SUCCESS, payload})
		} catch (error) {
			dispatch({type: STATS_ERROR, error})
		}
	}
}