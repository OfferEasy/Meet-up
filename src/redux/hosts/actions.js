import { FETCH_HOSTS, FETCH_HOSTS_SUCCESS } from './constants';

export const fetchHosts = (search) => {
    const action = {
        type: FETCH_HOSTS,
        payload: search
    }

    return action;
};

export const fetchHostsSuccess = (hosts) => {
    const action = {
        type: FETCH_HOSTS_SUCCESS,
        payload: hosts
    }

    return action;
};