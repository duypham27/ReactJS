import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return response.data;

        // if (data.hasOwnProperty('s') && !isSuccessStatusCode(data['s']) && data.hasOwnProperty('errmsg')) {
        //     return Promise.reject(createError(response.status, data['s'], data['errmsg'], null, data['errcode'] ? data['errcode'] : ""));
        // }

        // // Return direct data to callback
        // if (data.hasOwnProperty('s') && data.hasOwnProperty('d')) {
        //     return data['d'];
        // }
        // // Handle special case
        // if (data.hasOwnProperty('s') && _.keys(data).length === 1) {
        //     return null;
        // }
        // return response.data;
    },
);

export default instance;
