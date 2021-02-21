import { combineReducers } from 'redux';
import EventReducer from './events/reducer';
import HostsReducer from './hosts/reducer';

const reducers = combineReducers({
        EventReducer,
        HostsReducer
    });

export default reducers;