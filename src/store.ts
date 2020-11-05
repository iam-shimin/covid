import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import statsReducer from 'reducers/stats';

export default createStore(
	statsReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);