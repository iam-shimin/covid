import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import statsReducer from 'reducers/stats';

const rootReducer = combineReducers({
	stats: statsReducer
});

export default createStore(rootReducer, composeWithDevTools());