import axios from 'axios';

export const AnimalController = {
    async list() {
        return await axios({
            method: 'GET',
            baseURL: process.env.API_URL,
            url: 'animals'
        });
    }
}

