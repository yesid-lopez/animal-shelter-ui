import axios from 'axios';

export const AnimalController = {
    register(animal) {
        return axios({
            url: `animal`,
            baseURL: process.env.API,
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

