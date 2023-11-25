import axios from "axios";

const API_KEY = 'qBERv54ET37AgBbC-h8dP01Jo-9PYTU_8__Y9vgnuUQ';
// Authorization: Client-ID YOUR_ACCESS_KEY
const DELAY_MS = 750;
export const axiosClient = axios.create(
    {
        baseURL: `https://api.unsplash.com`,
        headers: {'Authorization': `Client-ID ${API_KEY}`}
    });

// Create an interceptor to introduce a delay between requests
axiosClient.interceptors.request.use(
    async (config) => {
        // Delay before making the request
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

