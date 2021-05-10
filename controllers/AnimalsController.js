import axios from 'axios';

export const AnimalController = {
    register(animal) {
        return axios({
            url: `animals`,
            baseURL: process.env.API,
            headers: {
                'Content-Type': 'application/json',
            },
            data: animal,
            method: 'POST'
        })
    },
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: 'animals'
        });
    },
    delete(animalName) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `animals/${animalName}`
        });
    }
}

