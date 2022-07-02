import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://10.237.0.207:8000',
});

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);
