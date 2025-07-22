import axios from "axios";

// const baseURL = 'https://receipe-sharing-app-backend.onrender.com/api/v1';
const baseURL = 'http://localhost:3001/api/v1';
const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;