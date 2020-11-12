import { INDIAN_STATE_LATLNG } from './../constants';

interface IStatForState {
	state: string,
	statecode: keyof typeof INDIAN_STATE_LATLNG,
	active: string,
	confirmed: string,
	deaths: string,
	recovered: string,
	lastupdatedtime: string,
	statenotes: string
}

interface IStatsReduxState {
	error: null | Error,
	isLoading: boolean,
	data: null | IStatForState[],
	timeseries: null | any[]
}

interface LoadingAction {
	type: 'STATS_LOADING'
}

interface ErrorAction {
	type: 'STATS_ERROR',
	error: Error
}

interface SuccessAction {
	type: 'STATS_SUCCESS',
	payload: {
		statewise: IStatForState[],
		cases_time_series: any
	}
}

type StatsAction = LoadingAction | ErrorAction | SuccessAction;