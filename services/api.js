import axios from 'axios'
import axiosRetry from 'axios-retry';

export const axiosApi = axios.create({
    // baseURL: window.location.protocol + '//' + window.location.host + '/unichristus/api',
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 240000,
    // withCredentials: true,
    crossdomain: true,
    headers: 
    {
        'Content-Type': 'application/json'
    },
});

axiosRetry(axiosApi, { retries: 3 });