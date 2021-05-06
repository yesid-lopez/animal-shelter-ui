import axios from 'axios';

export const AnimalController = {
    register(animal) {
        return axios({
            method: 'POST',
            baseURL: process.env.API,
            url: `animals`,
            data: animal,
        })
    },
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: 'animals'
        });
    },
    delete(name) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `animals/${name}`,
        });
    },
    getAnimal(name) {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: `animals/${name}`,
        });
    },
    updateAnimal(name) {
        return axios({
            method: 'PUT',
            baseURL: process.env.API,
            url: `animals/${name}`,
        });
    }
}

