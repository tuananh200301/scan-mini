import {combineReducers} from 'redux';

import appReducer, {namespace as appNamespace} from './modules/app';
const reducer = extraReducers =>
	combineReducers({
		[appNamespace]: appReducer,
		...extraReducers
	})

export default reducer;
