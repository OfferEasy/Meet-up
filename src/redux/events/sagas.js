import { all, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_EVENTS } from './constants';
import { fetchEvents, fetchEventsSuccess} from './actions';
import {getEventsAPI} from '../../api/events/events.api';

function* getEvents(action) {
    try {
        const response = yield call(getEventsAPI, action.payload ? action.payload : "");
        if (response.data) {
            yield put(fetchEventsSuccess(response.data))
        }
    }catch(error) {
        console.log(error);
    }
};

export default function* mySaga() {
    yield all([
        takeEvery(FETCH_EVENTS, getEvents),
    ]);
}

