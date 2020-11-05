import {
	STATS_LOADING,
	STATS_ERROR,
	STATS_SUCCESS
} from '../constants';

const initialState: IStatsReduxState = {
	error: null,
	isLoading: false,
	data: null
}

export default function statsReducer(
	state: IStatsReduxState = initialState,
	action: StatsAction
): IStatsReduxState {
	switch (action.type) {
		case STATS_LOADING:
			return {...state, isLoading: true};
		case STATS_SUCCESS:
			return {...state, isLoading: false, data: action.payload};
		case STATS_ERROR:
			return {...state, isLoading: false, error: action.error};
		default:
			return state;
	}
}