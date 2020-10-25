import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

export const axiosApi: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 240000,
    headers:
    {
        'Content-Type': 'application/json'
    },
});

axiosRetry(axiosApi, { retries: 3 });