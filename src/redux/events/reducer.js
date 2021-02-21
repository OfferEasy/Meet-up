import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS } from './constants';

const initState = {
    events: '',
    loading: false
}

const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                loading: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        default: 
            return state;
    }
};

export default eventsReducer;