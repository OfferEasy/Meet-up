import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_HOSTS } from './constants';
import { fetchHostsSuccess } from './actions';
import { getHostsAPI } from '../../api/hosts/hosts.api';

function* getHosts(action) {
    try{
        const response = yield call(getHostsAPI, action.payload ? action.payload : {});
        if (response.data) {
            yield put(fetchHostsSuccess(response.data))
        }
    }catch(error) {
        console.log(error);
    }
};

export default function* mySaga() {
    yield all([
        takeEvery(FETCH_HOSTS, getHosts),
    ]);
};