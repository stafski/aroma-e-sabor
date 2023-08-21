import axios from "axios";

export const api = axios.create({
    baseURL: 'https://m3-front-end-recipes.onrender.com',
    timeout: 8000
});