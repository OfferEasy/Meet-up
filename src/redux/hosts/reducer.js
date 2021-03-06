import {FETCH_HOSTS, FETCH_HOSTS_SUCCESS} from './constants';

const initState = {
    hosts: '',
    loading: false
}

const hostsReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_HOSTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_HOSTS_SUCCESS:
            return {
                ...state,
                hosts: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default hostsReducer;