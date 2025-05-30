import axios from "axios";

const baseURL = 'https://receipe-sharing-app-backend.onrender.com/api/v1';

const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default instance;