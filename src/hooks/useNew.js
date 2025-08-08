import { get } from "../api/newsApi";
export const useNew = () => {

    const getNews = async ({ search }) => {
        return await get({ search });
    }

    return {
        getNews
    }
}