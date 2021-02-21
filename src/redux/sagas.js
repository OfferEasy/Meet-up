import { all } from 'redux-saga/effects';
import eventsSaga from './events/sagas';
import hostsSaga from './hosts/saga';

export default function* rootSaga() {
    yield all([
        eventsSaga(),
        hostsSaga(),
    ]);
};