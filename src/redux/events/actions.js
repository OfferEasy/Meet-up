import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS } from './constants';

export const fetchEvents = (search) => {
    const action = {
        type: FETCH_EVENTS,
        payload: search
    };

    return action;
};

export const fetchEventsSuccess = (events) => {
    const action = {
        type: FETCH_EVENTS_SUCCESS,
        payload: events
    };

    return action;
};