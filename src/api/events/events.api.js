import Axios from 'axios';

const EVENTS_URL = 'https://601caf791a9c220017060c02.mockapi.io/api/v1/Events';

const SET_PARAMAS = ({date}) => {
    let params = [];
    if (date) {
        params.push("date=" + date)
    }
    return params;
}

export const getEventsAPI = async({date}) => {
    try {
        let url = EVENTS_URL;
        let params = SET_PARAMAS({date});

        for (let i=0; i < params.length; i++) {
            url += i > 0 ? "&" + params[i] : "?" + params[i]
        }
        const res = await Axios.get(url);
        return res;
    }catch(error) {
        throw error;
    }
};