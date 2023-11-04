import axios from "axios";

const API_KEY = 'qBERv54ET37AgBbC-h8dP01Jo-9PYTU_8__Y9vgnuUQ';
// Authorization: Client-ID YOUR_ACCESS_KEY

export const axiosClient = axios.create(
    {
        baseURL: `https://api.unsplash.com`,
        headers: {'Authorization': `Client-ID ${API_KEY}`}
    });


