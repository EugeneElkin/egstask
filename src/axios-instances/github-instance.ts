import axios from 'axios';

export const gthubAPI = axios.create({
    baseURL: 'https://api.github.com/'
});