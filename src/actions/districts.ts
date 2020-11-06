import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import fetchDistricts from 'api/districts';;
import {
	STAT_DISTRICT_LOADING,
	STAT_DISTRICT_ERROR,
	STAT_DISTRICT_SUCCESS
} from '../constants';
import { IStatsReduxState, StatsAction } from 'reducers/store';

export default function loadStats(): ThunkAction<void, IStatsReduxState, unknown, StatsAction> {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		dispatch({type: STAT_DISTRICT_LOADING});
		try {
			const payload = await fetchDistricts();
			dispatch({type: STAT_DISTRICT_SUCCESS, payload})
		} catch (error) {
			dispatch({type: STAT_DISTRICT_ERROR, error})
		}
	}
}