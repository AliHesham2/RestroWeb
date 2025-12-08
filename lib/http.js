import axios from 'axios';
import { getToken } from '@/utils/storage';

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Default fallback
    headers: {
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling can be added here
        return Promise.reject(error);
    }
);

export default http;
