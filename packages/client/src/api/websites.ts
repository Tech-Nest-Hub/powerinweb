import api from "./client";

export const getWebsites = async () => {
    const response = await api.get('/websites');
    return response.data;
}

export default getWebsites;