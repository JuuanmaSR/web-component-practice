import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2/';

const newsApi = axios.create({
    baseURL: baseUrl,
});


export const get = async ({ search }) => {
    const { data } = await newsApi.get('everything', {
        params: {
            q: search,
            sortBy: 'popularity',
            language: 'es',
            pageSize: 10,
            apiKey: API_KEY
        },
    });
    return data;
}


