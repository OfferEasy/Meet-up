import Axios from 'axios';

const HOSTS_URL = 'https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts';

const SET_PARAMAS = ({date}) => {
    let params = [];
    if (date) {
        params.push("date=" + date)
    }
    return params;
}

export const getHostsAPI = async({date}) => {
    try {
        let url = HOSTS_URL;
        let params = SET_PARAMAS({date});

        for (let i=0; i < params.length; i++) {
            url += i > 0 ? "&" + params[i] : "?" + params[i]
        }

        const res = Axios.get(url);
        return res;
    } catch(error) {
        throw error;
    }
};

