import {
	all,
	fork,
	put,
	takeLatest,
	select,
} from 'redux-saga/effects';
import {BOOT, bootFinished} from './';
import {redirect} from 'redux-first-router';
import {
	selectRouteType,
	selectRoutesMap,
} from '../routing';
import _ from 'lodash'
import { getAccessToken } from 'utils/helper';

function* watchAppBoot() {
	yield takeLatest(BOOT, function* () {
		const routesMap = yield select(selectRoutesMap);
		const routeType = yield select(selectRouteType);
		const currentRoute = routesMap[routeType];
		const {location} = yield select();
		if (currentRoute && getAccessToken()) {
			
		} else {
			yield put(bootFinished());
			yield put(redirect({
				type: routeType,
				payload: location.payload,
				query: location.query
			}));
		}
	});
	

}

export default function* auth() {
	yield all([
		fork(watchAppBoot),
	]);
}
  