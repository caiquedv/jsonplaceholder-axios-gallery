import axios from "axios";

const AXIOSINSTANCE = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllPhotos: async (slug: string | undefined) => {
        let response = await AXIOSINSTANCE.get(`/album/${slug}/photos`);
        return response.data;
    },

    getPhoto: async (slug: string | undefined) => {
        let response = await AXIOSINSTANCE.get(`/photos/${slug}`);
        return response.data;
    },

    getAlbums: async () => {
        let response = await AXIOSINSTANCE.get('/albums');
        return response.data;
    }
} 